import type { GlyphName } from '@/components/icons/Glyph';

export interface Feature {
  icon: GlyphName;
  title: string;
  description: string;
}

export interface Plan {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  highlight: boolean;
  badge?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export const features: Feature[] = [
  { icon: 'scan',    title: 'AI receipt scans',         description: 'Snap a receipt. We pull the vendor, line items, tax and total in seconds. No typing.' },
  { icon: 'import',  title: 'Bank statement import',    description: 'Drop a CSV or PDF statement. Income lands categorised and ready to review.' },
  { icon: 'expense', title: 'Expense tracking',         description: 'Add expenses by hand or by camera. Recurring, refundable, billable — all flagged.' },
  { icon: 'tax',     title: 'Nigeria 2026 tax engine',  description: 'Live bands. Pension, NHF, rent relief. Filing deadlines you can actually trust.' },
  { icon: 'report',  title: 'PDF reports',              description: 'Send your accountant a clean PDF in one tap. CSV export — always free.' },
  { icon: 'tag',     title: 'Client & project tagging', description: 'Tag every entry by client or project. See profit by job without spinning up a spreadsheet.' },
  { icon: 'fx',      title: 'FX-aware ($ ↔ ₦)',         description: 'Earn in dollars, spend in naira? We track both. The bank rate vs the day-of rate, side by side.' },
  { icon: 'shield',  title: 'Bank-grade encryption',    description: 'End-to-end encryption. Biometric lock. Your books never leave your device unless you say so.' },
];

export const services: string[] = [
  'Dashboard with monthly cashflow',
  'Income & expense ledger',
  'AI-powered receipt OCR',
  'Bank statement import (CSV / PDF)',
  'Nigeria 2026 tax estimator',
  'Pension, NHF & rent reliefs',
  'Client & project tagging',
  'Recurring & billable flags',
  'FX-aware (USD / NGN / EUR / GBP)',
  'PDF & CSV export',
  'Biometric app lock',
  'Cloud sync across devices',
];

export const plans: Plan[] = [
  {
    name: 'Free',
    price: '₦0',
    cadence: 'forever',
    blurb: 'Track your books without paying a kobo.',
    features: [
      'Unlimited manual entries',
      '10 AI receipt scans / month',
      'CSV export',
      '1 device',
      'Basic tax estimate',
    ],
    cta: 'Get the app',
    highlight: false,
  },
  {
    name: 'Pro Monthly',
    price: '₦4,500',
    cadence: '/ month',
    blurb: 'Full power. Cancel anytime.',
    features: [
      'Unlimited AI receipt scans',
      'Full tax deduction breakdown',
      'PDF expense reports',
      'FX loss analytics',
      'Bank statement import',
      'Priority support',
    ],
    cta: 'Start Pro',
    highlight: false,
  },
  {
    name: 'Pro Yearly',
    price: '₦36,000',
    cadence: '/ year',
    blurb: 'Save 33%. Two months on us.',
    features: [
      'Everything in Pro Monthly',
      'Save ₦18,000 vs monthly',
      'Yearly tax summary PDF',
      'Up to 5 devices',
      'Early access to new features',
    ],
    cta: 'Go Yearly',
    highlight: true,
    badge: 'Best value',
  },
];

export const faqs: Faq[] = [
  {
    q: 'Where is my data stored?',
    a: 'Encrypted on your device by default. If you turn cloud sync on, it lives in your private vault on our servers — encrypted in transit and at rest.',
  },
  {
    q: 'Do I need a bank connection?',
    a: 'No. LedgrOS works fully offline. Bank statement import is opt-in: drop a CSV or PDF, we never touch your bank credentials.',
  },
  {
    q: 'How accurate is the Nigeria 2026 tax estimate?',
    a: 'It applies the official 2026 NTA bands, plus the relevant pension, NHF, and rent reliefs you enable. It is an estimate — not a substitute for your accountant — but it gets you within a few thousand naira of the right number.',
  },
  {
    q: 'Can I cancel my subscription?',
    a: 'Anytime. Manage it from the App Store, Google Play, or the Profile → Subscription screen. Pro features stay active until the end of your billing period.',
  },
  {
    q: 'Do you support currencies other than the naira?',
    a: 'Yes. Many freelancers earn in USD and spend in NGN. LedgrOS logs both and tracks the exchange rate at the time of each transaction so your books — and your tax — reflect reality.',
  },
];
