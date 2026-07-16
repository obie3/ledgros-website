#!/usr/bin/env bash
# One-time AWS provisioning for the Zakios website pipeline.
#
# Creates:
#   1. Private S3 bucket (no public access — CloudFront is the only reader)
#   2. CloudFront distribution with Origin Access Control + SPA routing
#   3. GitHub OIDC provider + IAM deploy role scoped to this repo's main branch
#
# Prereqs: AWS CLI v2 configured with an admin-ish profile.
# Usage:   ./scripts/aws-setup.sh
#
# After it finishes, configure the GitHub repo (see DEPLOY.md).

set -euo pipefail

# ─── Config ──────────────────────────────────────────────────────────────────
BUCKET="zakios-website"
REGION="us-east-1"
GITHUB_REPO="obie3/ledgros-website"   # owner/repo
ROLE_NAME="zakios-website-deploy"
OAC_NAME="zakios-website-oac"

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
echo "Account: $ACCOUNT_ID"

# ─── 1. S3 bucket (private) ──────────────────────────────────────────────────
if [ "$REGION" = "us-east-1" ]; then
  aws s3api create-bucket --bucket "$BUCKET" --region "$REGION"
else
  aws s3api create-bucket --bucket "$BUCKET" --region "$REGION" \
    --create-bucket-configuration LocationConstraint="$REGION"
fi

aws s3api put-public-access-block --bucket "$BUCKET" \
  --public-access-block-configuration \
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true

echo "Bucket created: s3://$BUCKET"

# ─── 2. CloudFront: Origin Access Control ────────────────────────────────────
OAC_ID=$(aws cloudfront create-origin-access-control --origin-access-control-config "{
  \"Name\": \"$OAC_NAME\",
  \"OriginAccessControlOriginType\": \"s3\",
  \"SigningBehavior\": \"always\",
  \"SigningProtocol\": \"sigv4\"
}" --query 'OriginAccessControl.Id' --output text)

echo "OAC created: $OAC_ID"

# ─── 3. CloudFront distribution ──────────────────────────────────────────────
# SPA routing: S3 returns 403 for unknown paths on a private bucket, so map
# 403/404 to /index.html with a 200. CachingOptimized managed policy.
DIST_CONFIG=$(cat <<EOF
{
  "CallerReference": "zakios-site-$(date +%s)",
  "Comment": "Zakios marketing site",
  "Enabled": true,
  "DefaultRootObject": "index.html",
  "HttpVersion": "http2and3",
  "PriceClass": "PriceClass_100",
  "Origins": {
    "Quantity": 1,
    "Items": [{
      "Id": "s3-$BUCKET",
      "DomainName": "$BUCKET.s3.$REGION.amazonaws.com",
      "OriginAccessControlId": "$OAC_ID",
      "S3OriginConfig": { "OriginAccessIdentity": "" }
    }]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "s3-$BUCKET",
    "ViewerProtocolPolicy": "redirect-to-https",
    "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6",
    "Compress": true,
    "AllowedMethods": { "Quantity": 2, "Items": ["GET", "HEAD"] }
  },
  "CustomErrorResponses": {
    "Quantity": 2,
    "Items": [
      { "ErrorCode": 403, "ResponseCode": "200", "ResponsePagePath": "/index.html", "ErrorCachingMinTTL": 10 },
      { "ErrorCode": 404, "ResponseCode": "200", "ResponsePagePath": "/index.html", "ErrorCachingMinTTL": 10 }
    ]
  }
}
EOF
)

DIST_JSON=$(aws cloudfront create-distribution --distribution-config "$DIST_CONFIG")
DIST_ID=$(echo "$DIST_JSON" | python3 -c "import sys,json; print(json.load(sys.stdin)['Distribution']['Id'])")
DIST_DOMAIN=$(echo "$DIST_JSON" | python3 -c "import sys,json; print(json.load(sys.stdin)['Distribution']['DomainName'])")

echo "Distribution: $DIST_ID  →  https://$DIST_DOMAIN"

# ─── 4. Bucket policy: CloudFront-only reads ─────────────────────────────────
aws s3api put-bucket-policy --bucket "$BUCKET" --policy "{
  \"Version\": \"2012-10-17\",
  \"Statement\": [{
    \"Sid\": \"AllowCloudFrontRead\",
    \"Effect\": \"Allow\",
    \"Principal\": { \"Service\": \"cloudfront.amazonaws.com\" },
    \"Action\": \"s3:GetObject\",
    \"Resource\": \"arn:aws:s3:::$BUCKET/*\",
    \"Condition\": { \"StringEquals\": {
      \"AWS:SourceArn\": \"arn:aws:cloudfront::$ACCOUNT_ID:distribution/$DIST_ID\"
    }}
  }]
}"

# ─── 5. GitHub OIDC provider (skip if it already exists) ─────────────────────
aws iam create-open-id-connect-provider \
  --url "https://token.actions.githubusercontent.com" \
  --client-id-list "sts.amazonaws.com" \
  --thumbprint-list "6938fd4d98bab03faadb97b34396831e3780aea1" \
  2>/dev/null || echo "OIDC provider already exists — OK"

# ─── 6. IAM deploy role, scoped to main branch of this repo ──────────────────
aws iam create-role --role-name "$ROLE_NAME" --assume-role-policy-document "{
  \"Version\": \"2012-10-17\",
  \"Statement\": [{
    \"Effect\": \"Allow\",
    \"Principal\": { \"Federated\": \"arn:aws:iam::$ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com\" },
    \"Action\": \"sts:AssumeRoleWithWebIdentity\",
    \"Condition\": {
      \"StringEquals\": { \"token.actions.githubusercontent.com:aud\": \"sts.amazonaws.com\" },
      \"StringLike\":  { \"token.actions.githubusercontent.com:sub\": [
        \"repo:$GITHUB_REPO:ref:refs/heads/main\",
        \"repo:$GITHUB_REPO:environment:*\"
      ] }
    }
  }]
}"

aws iam put-role-policy --role-name "$ROLE_NAME" --policy-name deploy --policy-document "{
  \"Version\": \"2012-10-17\",
  \"Statement\": [
    {
      \"Effect\": \"Allow\",
      \"Action\": [\"s3:ListBucket\"],
      \"Resource\": \"arn:aws:s3:::$BUCKET\"
    },
    {
      \"Effect\": \"Allow\",
      \"Action\": [\"s3:PutObject\", \"s3:DeleteObject\", \"s3:GetObject\"],
      \"Resource\": \"arn:aws:s3:::$BUCKET/*\"
    },
    {
      \"Effect\": \"Allow\",
      \"Action\": [\"cloudfront:CreateInvalidation\"],
      \"Resource\": \"arn:aws:cloudfront::$ACCOUNT_ID:distribution/$DIST_ID\"
    }
  ]
}"

echo ""
echo "──────────────────────────────────────────────────────────"
echo "Done. Now set these in GitHub → repo Settings:"
echo ""
echo "  Variables:"
echo "    AWS_REGION                  = $REGION"
echo "    S3_BUCKET                   = $BUCKET"
echo "    CLOUDFRONT_DISTRIBUTION_ID  = $DIST_ID"
echo ""
echo "  Secrets:"
echo "    AWS_DEPLOY_ROLE_ARN = arn:aws:iam::$ACCOUNT_ID:role/$ROLE_NAME"
echo ""
echo "  Site URL (until the custom domain is attached):"
echo "    https://$DIST_DOMAIN"
echo "──────────────────────────────────────────────────────────"
