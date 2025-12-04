/**
 * CONFIG: Authoritative data source for pricing cards.
 * Must satisfy PricingCardDTO and SOLID rules.
 */

import { PricingCardDTO } from '../types/pricing-card';

export const PRICING_CARDS: PricingCardDTO[] = [
  {
    title: 'Standard Plan',
    subtitle: 'Intro early-access offer: flat ₹1,000 off on your first billing period.',
    price: '₹1,999/month',
    features: [
      'GST-compliant invoices, reports, and monthly filing exports',
      'Multi-branch inventory and stock tracking',
      'Supabase-backed authentication and data security',
      'Mobile-first, offline-friendly workflows for field teams',
      'Email support from the FineTune team'
    ],
    note: 'Price shown includes 18% GST.',
    ctaText: 'Get started free',
    ctaHref: 'contact-us.html' // INTERNAL ONLY — eslint must enforce
  }
];

