/**
 * DTO – Footer Contract
 * SOURCE OF TRUTH → docs/modules/footer/interfaces.md + constraints.md
 */
export interface FooterDTO {
  brandName: string;          // Displayed in .footer-brand
  gstin: string;              // Must exist – legal requirement
  registeredAddress: string;  // Must exist – legal requirement

  navLinks: Array<{
    text: string;             // Link label
    href: string;             // Must be internal only
  }>;
}
