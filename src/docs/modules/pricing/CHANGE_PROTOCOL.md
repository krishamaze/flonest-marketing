# Pricing Module – Change Protocol

## 🔐 This domain is locked.
Changes require justification.

### Allowed Changes:
- Text edits (typos or wording)
- Adding new plan (must follow DTO structure)

### Forbidden:
- Introducing payment logic
- Price calculation via JS
- Removing INR/₹ currency

### Mandatory Process:
1. Update `docs/modules/pricing/interfaces.md`
2. Update `src/types/pricing-card.ts`
3. Update `src/config/pricing-cards.ts`
4. Run `npm run build:pricing`
5. Validate:  
` ``
node .github/scripts/scan-pricing.js --ai-mode
` ``
6. Only if “Eligible” → PR allowed.
` ``
