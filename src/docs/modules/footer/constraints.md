# Footer Module – Constraints

## S.O.L.I.D Enforcement

### S – Single Responsibility
Footer **only** presents static legal/business/brand information.  
No redirects, no user interaction, no tracking logic.

### O – Open / Closed
New links may be added **only** if:
- They point to internal pages (`href="/privacy-policy.html"`)
- They do **not** change structure
- They do **not** trigger page-specific logic

### L – Liskov Substitution
Every page must be able to inject this footer **without knowing internal content**.  
No page should depend on footer state or variables.

### I – Interface Segregation
Footer must not include extra concerns:
- No contact form
- No newsletter subscribe field
- No cookies banner

### D – Dependency Inversion
Footer layout must depend on **DTO config**, not inline HTML in page:
- Must be sourced from:  
  `/src/config/footer-data.ts`
- Auto-generated via:
  `/src/scripts/generate-footer-html.ts`

---

## Business Rules

| Rule | Enforcement |
|------|-------------|
| Must display GSTIN | Data must exist in DTO |
| Must include Registered Address | Data must exist in DTO |
| Links must be internal only | ESLint rule blocks external |
| Must load on **every** public page | CI can check via grep |

---

## Forbidden

- `<script>` of any type  
- External `<a href="http...">` links  
- `target="_blank"`  
- Social media embeds  
- Google Maps / iFrames  

---

## Legal Requirements

Footer must remain visible and readable  
**even if JavaScript is completely disabled.**
