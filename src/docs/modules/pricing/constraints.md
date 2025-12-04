# Pricing Module Constraints

## SOLID Compliance
- **S (SRP):** No Javascript logic for price calculation. Static display only.
- **O (OCP):** New plans should be added as new `.pricing-card` blocks without modifying existing CSS classes.
- **L (LSP):** Any section using `.pricing-card` must support the standard content structure (Title, Price, Features).
- **I (ISP):** Do not force the "Features" section to carry "Pricing" data. Keep them in separate `.container` blocks.
- **D (DIP):** Depend on global CSS variables, not hardcoded hex values.

## Business Constraints
1. **Business Info:** The footer MUST display the full legal business address and GSTIN as defined in the global rules.
2. **Currency:** All prices must be in INR (₹).
3. **Trial:** The "90-day free trial" message must be prominent in the hero section.
4. **No JS:** No `<script>` tags allowed within the module body.

