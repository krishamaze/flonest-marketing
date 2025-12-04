/**
 * CONFIG – Authoritative footer data
 * Must satisfy FooterDTO and legal constraints.
 */

import { FooterDTO } from '../types/footer';

export const FOOTER_DATA: FooterDTO = {
  brandName: 'FINETUNE',
  gstin: '33CPXPK3822A2ZZ',
  registeredAddress: 'SHOP NO.F6, DOOR NO.181/12, CHERAN PLAZA, PALAKKAD MAIN ROAD, ETTIMADAI PIRIVU, COIMBATORE – 641112, Tamil Nadu, India',

  navLinks: [
    { text: 'Privacy Policy', href: '/privacy-policy.html' },
    { text: 'Terms & Conditions', href: '/terms-and-conditions.html' },
    { text: 'Contact', href: '/contact-us.html' }
  ]
};
