# Changelog

All notable changes to the Flonest marketing site are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased] - 2025-11-23

### Added - Phase 1: Complete Rebrand from FineTune WorkHub to Flonest

#### E-Commerce Capability Signal (Commit: `90bddc3`)
- **New Feature Card** added to `index.html` "Why Choose Flonest?" section
  - Icon: 🛒
  - Title: "E-Commerce Ready"
  - Description: "Enable online sales with stock sync & digital payments — tenant-only access."
- **Purpose:** Close product-marketing gap between Supabase database capabilities and website messaging
- **Impact:** Positions Flonest as complete retail OS (comparable to Zoho Commerce/Shopify) instead of just POS/inventory software
- **Stakeholder Value:**
  - Tenants: Understand full platform capabilities during evaluation
  - Investors: See scalable SaaS platform vs. "small billing tool"
  - Competitive positioning: Enters Zoho Commerce/Shopify category

#### Multi-Tenant Architecture Disclosure (Commit: `b96cec5`)
- **Added to `privacy-policy.html`** (line 37):
  - Platform Structure disclosure paragraph
  - Clarifies Flonest is multi-tenant SaaS operated by FINETUNE as first tenant
  - Confirms no impact on tenant data ownership, access rights, or privacy protections
- **Purpose:** Align legal narrative with technical architecture (Supabase RLS multi-tenancy)
- **Risk Mitigation:**
  - Prevents tenant confusion about platform vs. internal tool
  - Addresses investor questions about multi-tenant separation
  - Clarifies data ownership model for legal reviewers

### Changed - Complete Rebrand (Commit: `17b2ee2`)

#### Brand Identity Updates Across All Pages
**9 HTML files updated:**
- `index.html`
- `about.html`
- `pricing.html`
- `contact-us.html`
- `policies.html`
- `privacy-policy.html`
- `terms-and-conditions.html`
- `refund-and-cancellation.html`
- `shipping-policy.html`

**Changes Applied:**
- **Logo:** "FineTune WorkHub" → "Flonest"
- **Meta Descriptions:** Updated to reference Flonest
- **Canonical URLs:** `finetune.store` → `flonest.app`
- **Page Titles:** Updated to Flonest branding
- **Navigation:** Logo text changed to "Flonest"
- **CTA Buttons:** "Launch WorkHub" → "Get Started"
- **Section Headings:**
  - "About FineTune WorkHub" → "About Flonest"
  - "Why Choose FineTune WorkHub?" → "Why Choose Flonest?"
- **Footer:**
  - Copyright: "© 2025 FineTune WorkHub" → "© 2025 Flonest"
  - Added legal entity attribution: "Operated by FINETUNE (GSTIN: 33CPXPK3822A2ZZ)"

#### Legal & Policy Page Narrative Alignment (Commit: `b96cec5`)
**5 files updated with terminology changes:**

1. **`policies.html`**
   - Meta description: "FineTune SaaS platform" → "Flonest SaaS platform"
   - Body text: Updated platform references

2. **`pricing.html`**
   - Meta description: "FineTune pricing" → "Flonest pricing"
   - Canonical URL: Updated to `flonest.app/pricing`
   - Page title: "Pricing - FineTune SaaS Platform" → "Pricing - Flonest SaaS Platform"

3. **`privacy-policy.html`**
   - Opening paragraph: "FineTune inventory management and business onboarding platform" → "Flonest multi-tenant SaaS platform"
   - Added multi-tenant structure disclosure (see Added section above)

4. **`refund-and-cancellation.html`**
   - Policy notice: "FineTune SaaS" → "Flonest SaaS"

5. **`terms-and-conditions.html`**
   - Opening paragraph: "FineTune SaaS platform" → "Flonest SaaS platform"

### Preserved - Strategic Elements Maintained

#### Messaging (Per User Direction)
- ✅ "Digital Infrastructure for Modern Business" (hero heading)
- ✅ "The unified operating system for Finance, Device Rentals, and Operations" (subheading)
- ✅ All feature descriptions and value propositions

#### Legal Entity Information
- ✅ Business name: "FINETUNE" (all caps, legal entity)
- ✅ GSTIN: 33CPXPK3822A2ZZ
- ✅ Registered address: 1/394 A, Pappanaickenpalayam, Coimbatore, Tamil Nadu 641037
- ✅ Contact: Krishnamoorthy A (9047091629, krishamaze@gmail.com)
- ✅ Business information sections in `index.html` (lines 82-114, 147-154)

#### Business Context
- **Current State:** Free trial for all users (no revenue)
- **Timeline:** 3-month stabilization period to get registrations
- **Legal Structure:** Flonest operates under FINETUNE's GST until paid users arrive
- **Strategy:** Rebrand to Flonest NOW, keep FINETUNE as legal/billing entity

---

## Documentation (Commit: `58daba4`)

### Added
- **`TRANSITION_TO_FLONEST.md`** (550 lines)
  - Comprehensive strategic migration plan
  - Executive summary of brand strategic shift
  - Domain structure and repository analysis
  - Phased execution plan (3 phases over 2 weeks)
  - Marketing message guidelines
  - Priority task matrix
  - Success metrics and KPIs

---

## Technical Details

### Repository Information
- **Repository:** `krishamaze/flonest-marketing`
- **Branch:** `flonest-transition`
- **Base Branch:** `main`
- **Commits:** 4 commits ahead of main

### Deployment
- **Platform:** Vercel
- **Current Production:** `finetune.store`
- **Target Production:** `flonest.app`
- **Preview:** Auto-generated on branch push

### Technology Stack
- Static HTML/CSS site (no build process)
- No package.json or dependencies
- Pure HTML/CSS deployed to Vercel

---

## Migration Status

### ✅ Completed
- [x] Create `flonest-transition` branch
- [x] Document comprehensive migration plan
- [x] Rebrand all 9 HTML pages
- [x] Add e-commerce capability signal
- [x] Align legal pages with multi-tenant narrative
- [x] Push branch to remote

### 🔄 In Progress
- [ ] Create PR for review
- [ ] Merge to main
- [ ] Deploy to production

### ⏳ Pending (Phase 1 Remaining)
- [ ] Add `flonest.app` domain to Vercel project
- [ ] Update `styles.css` comment (line 1) from "FineTune Marketing Site" to "Flonest Marketing Site"
- [ ] Configure DNS for `flonest.app`

### 📋 Future Phases
- **Phase 2 (Week 1):** Content transformation for multi-tenant messaging (if needed)
- **Phase 3 (Week 2):** Database schema updates, domain configuration, DNS updates

---

## Contributors
- Krishnamoorthy A (@krishamaze)

---

## Notes
- All changes maintain legal compliance (GST details, business information)
- No breaking changes to existing functionality
- SEO-friendly canonical URLs updated
- Mobile-responsive design preserved

