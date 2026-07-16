# Deployment — S3 + CloudFront via GitHub Actions

Every push to `main` builds the site and deploys it to S3, then invalidates
CloudFront. Auth uses GitHub OIDC — no AWS keys stored in GitHub.

## One-time setup

1. **Provision AWS** (bucket, CloudFront, OAC, OIDC role):

   ```bash
   ./scripts/aws-setup.sh
   ```

   Edit the config block at the top first if you want a different bucket
   name or region. The script prints everything you need for step 2.

2. **Configure GitHub** — repo → Settings:

   | Type     | Name                         | Value                          |
   | -------- | ---------------------------- | ------------------------------ |
   | Variable | `AWS_REGION`                 | e.g. `us-east-1`               |
   | Variable | `S3_BUCKET`                  | e.g. `zakios-website`          |
   | Variable | `CLOUDFRONT_DISTRIBUTION_ID` | printed by the script          |
   | Secret   | `AWS_DEPLOY_ROLE_ARN`        | printed by the script          |

3. Push to `main` (or run the workflow manually via **Actions → Deploy →
   Run workflow**).

## Custom domain (usezakios.com)

1. Request an ACM certificate **in us-east-1** for `usezakios.com` and
   `www.usezakios.com`, validate via DNS.
2. In the CloudFront distribution: add both as Alternate Domain Names and
   attach the certificate.
3. Point DNS at the distribution (`ALIAS`/`CNAME` →
   `dxxxxxxxxxxxxx.cloudfront.net`).

## How caching works

- `dist/assets/*` (hashed filenames) → `max-age=31536000, immutable`
- `index.html`, favicons → `max-age=60, must-revalidate`
- Deploys invalidate `/index.html` and `/` so new releases are live
  immediately.

## SPA routing

The bucket is private; CloudFront maps S3 403/404 responses to
`/index.html` with a 200, so `/privacy` and `/delete-account` work on
direct load. (`public/_redirects` and `vercel.json` are for Netlify/Vercel
and are ignored by AWS.)
