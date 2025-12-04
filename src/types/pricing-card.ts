/**
 * DTO: Strict contract for pricing cards.
 * SOURCE OF TRUTH → docs/modules/pricing/interfaces.md
 */
export interface PricingCardDTO {
  title: string;           // .pricing-card__title
  subtitle: string;        // .pricing-card__subtitle
  price: string;           // Must include INR or `₹`
  features: string[];      // Each <li> item
  note: string;            // GST or condition note
  ctaText: string;         // CTA Button display text
  ctaHref: string;         // Must link internally only
}

