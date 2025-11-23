# UI/UX Quality Assurance Checklist

**Purpose:** Comprehensive visual regression testing for Flonest marketing site
**Scope:** All interactive components across devices, states, and background variants
**Last Updated:** 2025-11-23
**Status:** 🔴 Not Started

---

## Testing Matrix

### Devices & Viewports
- [ ] **Desktop** (1920×1080, 1440×900, 1280×720)
- [ ] **Tablet** (iPad: 1024×768, iPad Pro: 1366×1024)
- [ ] **Mobile** (iPhone 14: 390×844, Samsung S21: 360×800)
- [ ] **Small Mobile** (iPhone SE: 375×667)

### Background Variants
- [ ] **Light backgrounds** (`--bg-page: #F5F7FA`, `--bg-card: #FFFFFF`)
- [ ] **Dark backgrounds** (`--color-secondary: #1F2937` - header/hero/footer)
- [ ] **Colored backgrounds** (notice boxes, feature cards)

### Interactive States
- [ ] **Default** (resting state)
- [ ] **Hover** (mouse over)
- [ ] **Active** (click/tap down)
- [ ] **Focus** (keyboard navigation)
- [ ] **Visited** (for links)
- [ ] **Disabled** (if applicable)

---

## Component Inventory

### 1. Navigation Components

#### 1.1 Header Navigation (`<nav>`)
**Location:** All pages (top)
**CSS Classes:** `header`, `nav`, `logo`, `nav ul`, `nav a`

**Desktop Tests:**
- [ ] Logo color (`--color-primary: #E2C33D`) on dark background
- [ ] Logo font size (`--font-size-2xl: 24px`)
- [ ] Nav link default color (`--text-on-dark: #FFFFFF`)
- [ ] Nav link hover → `--color-primary` transition
- [ ] Active link color (`--color-primary`)
- [ ] Link spacing (`gap: var(--spacing-lg)`)
- [ ] Header shadow (`--shadow-md`)

**Tablet Tests:**
- [ ] Nav links readable at 768px breakpoint
- [ ] Font size reduction (`--font-size-sm: 14px`)
- [ ] Gap reduction (`--spacing-sm: 8px`)

**Mobile Tests:**
- [ ] Logo readable at 480px (`--font-size-lg: 18px`)
- [ ] Nav links don't wrap awkwardly
- [ ] Touch targets ≥44×44px (iOS accessibility)
- [ ] Gap at smallest size (`--spacing-xs: 4px`)

**States:**
- [ ] Hover: Color changes to `--color-primary`
- [ ] Focus: Visible outline for keyboard navigation
- [ ] Active: Visual feedback on click

---

### 2. Buttons & CTAs

#### 2.1 Primary CTA Button (`.cta-button`)
**Location:** Hero section (all pages), contact forms
**CSS:** Lines 222-244 in `styles.css`

**Visual Tests:**
- [ ] Background: `--color-primary` (#E2C33D)
- [ ] Text color: `--text-on-primary` (#000000)
- [ ] Padding: `16px 32px`
- [ ] Border radius: `--radius-md` (8px)
- [ ] Font size: `--font-size-lg` (18px)
- [ ] Font weight: `--font-weight-semibold` (600)

**Hover State:**
- [ ] Background changes to `--color-primary-hover` (#D4B635)
- [ ] Transforms up 2px (`translateY(-2px)`)
- [ ] Shadow appears (`--shadow-primary`)
- [ ] Transition smooth (`--transition-base: 200ms`)

**Active State:**
- [ ] Transform resets to `translateY(0)`
- [ ] Visual "press down" effect

**Focus State:**
- [ ] Keyboard focus ring visible
- [ ] Meets WCAG 2.1 contrast requirements

**Contrast Tests:**
- [ ] Text on primary button: 4.5:1 minimum (WCAG AA)
- [ ] Button on dark hero background: visible separation

**Responsive:**
- [ ] Button doesn't overflow on mobile (390px width)
- [ ] Touch target ≥44×44px
- [ ] Text doesn't wrap awkwardly

---

### 3. Links

#### 3.1 Inline Text Links (`.highlight`, content links)
**Location:** Privacy policy, terms, about section
**CSS:** Lines 127-135, 499-502 in `styles.css`

**Default State:**
- [ ] Color: `--color-primary` (#E2C33D)
- [ ] No underline (`text-decoration: none`)
- [ ] Font weight: `--font-weight-semibold` (600) for `.highlight`

**Hover State:**
- [ ] Color changes to `--color-primary-hover` (#D4B635)
- [ ] Transition: `--transition-fast` (150ms)

**Focus State:**
- [ ] Visible focus indicator
- [ ] Keyboard navigable

**Contrast Tests:**
- [ ] Link on white background: readable
- [ ] Link on light gray (`--bg-page`): readable
- [ ] Visited link color: distinguishable

#### 3.2 Footer Links
**Location:** Footer on all pages
**CSS:** Lines 559-569 in `styles.css`

**Default State:**
- [ ] Color: `--text-on-dark` (#FFFFFF)
- [ ] Font size: `--font-size-sm` (14px)
- [ ] Padding: `4px 0`

**Hover State:**
- [ ] Color changes to `--color-primary`
- [ ] Smooth transition

**Touch Targets:**
- [ ] Adequate spacing between links on mobile
- [ ] No accidental taps




---

### 4. Cards

#### 4.1 Feature Cards (`.feature-card`)
**Location:** Homepage "Why Choose Flonest?" section
**CSS:** Lines 289-326 in `styles.css`

**Default State:**
- [ ] Background: `--bg-card` (#FFFFFF)
- [ ] Padding: `--spacing-xl` (32px)
- [ ] Border radius: `--radius-lg` (12px)
- [ ] Shadow: `--shadow-md`
- [ ] Border: `1px solid --border-color` (#E5E7EB)

**Hover State:**
- [ ] Shadow increases to `--shadow-lg`
- [ ] Transforms up 2px (`translateY(-2px)`)
- [ ] Transition smooth (`--transition-base: 200ms`)
- [ ] **CRITICAL:** No text color change (reported hover issue)

**Feature Icon (`.feature-icon`):**
- [ ] Size: 64×64px
- [ ] Background: `--color-primary` (#E2C33D)
- [ ] Border radius: `--radius-md` (8px)
- [ ] Emoji centered and visible
- [ ] Emoji size: 32px

**Typography:**
- [ ] H3 color: `--color-secondary` (#1F2937)
- [ ] H3 size: `--font-size-xl` (20px)
- [ ] Paragraph color: `--text-secondary` (#374151)
- [ ] Line height: `--line-height-relaxed` (1.8)

**Grid Layout:**
- [ ] Desktop: 3 columns (auto-fit, minmax(280px, 1fr))
- [ ] Tablet: 2 columns at 768px
- [ ] Mobile: 1 column at 480px
- [ ] Gap: `--spacing-xl` (32px)

**Responsive:**
- [ ] Cards don't break layout on narrow screens
- [ ] Text remains readable at all sizes
- [ ] Icons scale appropriately

#### 4.2 Content Cards (`.content-card`)
**Location:** Legal pages (privacy, terms, policies)
**CSS:** Lines 450-497 in `styles.css`

**Default State:**
- [ ] Background: `--bg-card` (#FFFFFF)
- [ ] Padding: `--spacing-2xl` (48px)
- [ ] Border radius: `--radius-lg` (12px)
- [ ] Shadow: `--shadow-md`
- [ ] Border: `1px solid --border-color`

**Typography:**
- [ ] H2 color: `--color-secondary`
- [ ] H2 size: `--font-size-2xl` (24px)
- [ ] H3 color: `--color-secondary`
- [ ] H3 size: `--font-size-xl` (20px)
- [ ] Paragraph color: `--text-secondary`
- [ ] Strong text color: `--text-primary`

**Responsive:**
- [ ] Padding reduces to `--spacing-lg` (24px) on mobile
- [ ] Text remains readable
- [ ] No horizontal scroll

#### 4.3 Contact Cards (`.contact-card`, `.contact-item`)
**Location:** Contact page
**CSS:** Lines 396-447 in `styles.css`

**Contact Card:**
- [ ] Background: `--bg-card`
- [ ] Padding: `--spacing-xl` (32px)
- [ ] Shadow: `--shadow-md`
- [ ] Border: `1px solid --border-color`

**Contact Item:**
- [ ] Background: `--bg-page` (#F5F7FA)
- [ ] Padding: `--spacing-lg` (24px)
- [ ] Border radius: `--radius-md` (8px)
- [ ] Border: `1px solid --border-color`

**Contact Links:**
- [ ] Default color: `--text-primary`
- [ ] Font weight: `--font-weight-medium` (500)
- [ ] Hover color: `--color-primary`
- [ ] Word break: Handles long emails/URLs

**Icons:**
- [ ] Size: `--font-size-3xl` (32px)
- [ ] Margin bottom: `--spacing-sm` (8px)
- [ ] Emoji visible and centered

---

### 5. Typography

#### 5.1 Headings (H1-H6)
**CSS:** Lines 103-120 in `styles.css`

**H1 (Hero):**
- [ ] Font size: `--font-size-5xl` (48px) desktop
- [ ] Font size: `--font-size-3xl` (32px) mobile
- [ ] Font weight: `--font-weight-bold` (700)
- [ ] Line height: `--line-height-tight` (1.25)
- [ ] Color on dark: `--text-on-dark` (#FFFFFF)
- [ ] Highlight span: `--color-primary` (#E2C33D)

**H2 (Section Headers):**
- [ ] Font size: `--font-size-3xl` (32px) desktop
- [ ] Font size: `--font-size-2xl` (24px) mobile
- [ ] Color: `--text-primary` (#000000)
- [ ] Margin bottom: `--spacing-md` (16px)

**H3 (Card Titles):**
- [ ] Font size: `--font-size-2xl` (24px)
- [ ] Color: `--color-secondary` (#1F2937)
- [ ] Font weight: `--font-weight-bold` (700)

**Contrast Tests:**
- [ ] H1 on dark hero: ≥7:1 (WCAG AAA)
- [ ] H2 on light background: ≥4.5:1 (WCAG AA)
- [ ] H3 in cards: ≥4.5:1

#### 5.2 Body Text
**CSS:** Lines 92-100, 122-125 in `styles.css`

**Paragraphs:**
- [ ] Font size: `--font-size-base` (16px)
- [ ] Line height: `--line-height-normal` (1.7)
- [ ] Color: `--text-primary` or `--text-secondary`
- [ ] Margin bottom: `--spacing-md` (16px)

**Contrast Tests:**
- [ ] Primary text on white: ≥4.5:1
- [ ] Secondary text on white: ≥4.5:1
- [ ] Muted text on white: ≥4.5:1

---

### 6. Forms (If Applicable)

**Note:** Current site has no forms, but document for future contact forms

**Input Fields:**
- [ ] Border: `1px solid --border-color`
- [ ] Border radius: `--radius-md` (8px)
- [ ] Padding: `--spacing-md` (16px)
- [ ] Font size: `--font-size-base` (16px) - prevents iOS zoom
- [ ] Focus: Border color changes, visible outline

**Labels:**
- [ ] Font weight: `--font-weight-medium` (500)
- [ ] Color: `--text-primary`
- [ ] Associated with inputs (for accessibility)

**Error States:**
- [ ] Red border for invalid inputs
- [ ] Error message color: readable
- [ ] Icon or indicator for screen readers


---

### 7. Special Components

#### 7.1 Notice Box (`.notice-box`)
**Location:** Refund policy, legal pages
**CSS:** Lines 505-515 in `styles.css`

**Visual Tests:**
- [ ] Background: `rgba(226, 195, 61, 0.1)` (10% primary yellow)
- [ ] Border left: `4px solid --color-primary`
- [ ] Padding: `--spacing-md` (16px)
- [ ] Border radius: `--radius-md` (8px)
- [ ] Margin: `--spacing-lg` (24px) top/bottom

**Contrast:**
- [ ] Text readable on tinted background
- [ ] Border visible and distinct

#### 7.2 Last Updated Timestamp (`.last-updated`)
**Location:** Legal pages
**CSS:** Lines 518-527 in `styles.css`

**Visual Tests:**
- [ ] Font size: `--font-size-sm` (14px)
- [ ] Color: `--text-muted` (#6B7280)
- [ ] Font style: italic
- [ ] Background: `--bg-page` (#F5F7FA)
- [ ] Border radius: `--radius-sm` (4px)
- [ ] Padding: `8px 16px`
- [ ] Display: inline-block

**Contrast:**
- [ ] Muted text on light background: ≥4.5:1

#### 7.3 Business Info Section (`.business-info`)
**Location:** Homepage footer, about page
**CSS:** Lines 354-393 in `styles.css`

**Grid Layout:**
- [ ] Desktop: 2 columns (140px label, 1fr value)
- [ ] Mobile: 1 column (stacked)
- [ ] Gap: `--spacing-md` (16px)

**Typography:**
- [ ] Label font weight: `--font-weight-semibold` (600)
- [ ] Label color: `--text-secondary`
- [ ] Label size: `--font-size-sm` (14px)
- [ ] Value color: `--text-primary`
- [ ] Value size: `--font-size-base` (16px)

**Responsive:**
- [ ] Labels bold on mobile (grid-template-columns: 1fr)
- [ ] No horizontal scroll
- [ ] Readable on small screens

---

### 8. Footer

#### 8.1 Footer Structure
**Location:** All pages (bottom)
**CSS:** Lines 530-590 in `styles.css`

**Visual Tests:**
- [ ] Background: `--color-secondary` (#1F2937)
- [ ] Color: `--text-on-dark` (#FFFFFF)
- [ ] Padding: `48px 24px`
- [ ] Margin top: `--spacing-4xl` (80px)

**Grid Layout:**
- [ ] Desktop: Auto-fit columns (minmax(200px, 1fr))
- [ ] Tablet: 2 columns
- [ ] Mobile: 1 column
- [ ] Gap: `--spacing-xl` (32px)

**Section Headings:**
- [ ] Color: `--color-primary` (#E2C33D)
- [ ] Font size: `--font-size-lg` (18px)
- [ ] Margin bottom: `--spacing-md` (16px)

**Links:**
- [ ] Default: `--text-on-dark` (#FFFFFF)
- [ ] Hover: `--color-primary` (#E2C33D)
- [ ] Font size: `--font-size-sm` (14px)
- [ ] Padding: `4px 0`
- [ ] Transition: `--transition-fast` (150ms)

**Footer Bottom:**
- [ ] Text align: center
- [ ] Padding top: `--spacing-xl` (32px)
- [ ] Border top: `1px solid rgba(255,255,255,0.1)`
- [ ] Font size: `--font-size-sm` (14px)
- [ ] Opacity: 0.8

**Contrast:**
- [ ] White text on dark background: ≥7:1 (WCAG AAA)
- [ ] Primary yellow on dark: ≥4.5:1

---

## Accessibility Checklist

### Keyboard Navigation
- [ ] All interactive elements focusable with Tab
- [ ] Focus order logical (top to bottom, left to right)
- [ ] Focus indicators visible (outline, border, shadow)
- [ ] No keyboard traps
- [ ] Skip to main content link (if needed)

### Screen Reader
- [ ] Semantic HTML (`<nav>`, `<header>`, `<footer>`, `<main>`)
- [ ] Alt text for images (if any added)
- [ ] ARIA labels for icon-only buttons
- [ ] Heading hierarchy correct (H1 → H2 → H3)
- [ ] Link text descriptive (not "click here")

### Color Contrast (WCAG 2.1)
- [ ] Normal text: ≥4.5:1 (AA)
- [ ] Large text (18px+): ≥3:1 (AA)
- [ ] UI components: ≥3:1 (AA)
- [ ] Primary button text: ≥4.5:1
- [ ] Links on backgrounds: ≥4.5:1

### Touch Targets (Mobile)
- [ ] Minimum 44×44px (iOS guidelines)
- [ ] Adequate spacing between tappable elements
- [ ] No overlapping touch areas

---

## Browser Compatibility

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Safari iOS (iPhone)
- [ ] Chrome Android
- [ ] Samsung Internet

### CSS Feature Support
- [ ] CSS Grid (all modern browsers)
- [ ] CSS Variables (all modern browsers)
- [ ] Flexbox (all modern browsers)
- [ ] Transitions/Transforms (all modern browsers)

---

## Performance Checks

### Visual Performance
- [ ] No layout shift on page load (CLS)
- [ ] Smooth hover transitions (no jank)
- [ ] Smooth scroll behavior
- [ ] No FOUC (Flash of Unstyled Content)

### Font Loading
- [ ] System fonts load instantly (no web fonts)
- [ ] No font swap/flash


---

## Known Issues & Regressions

### Reported Issues
1. **Hover State Issue (Reported 2025-11-23)**
   - **Component:** Unknown (needs investigation)
   - **Description:** Hover behavior not working as expected
   - **Status:** 🔴 Not diagnosed
   - **Action:** Complete this checklist to identify root cause

### Historical Issues
- None documented yet

---

## Testing Workflow

### 1. Manual Testing
1. Open each page in browser
2. Test each component systematically
3. Use browser DevTools to simulate devices
4. Test keyboard navigation
5. Use contrast checker tools
6. Document failures in "Issues" section below

### 2. Automated Testing (Future)
- [ ] Set up visual regression testing (Percy, Chromatic)
- [ ] Set up accessibility testing (axe, Lighthouse)
- [ ] Set up cross-browser testing (BrowserStack)

### 3. Tools
- **DevTools:** Chrome/Firefox responsive mode
- **Contrast Checker:** WebAIM Contrast Checker
- **Accessibility:** axe DevTools extension
- **Screen Reader:** NVDA (Windows), VoiceOver (Mac/iOS)

---

## Sign-Off

### QA Rounds

#### Round 1: Initial Audit (2025-11-23)
- **Tester:** _____________
- **Date:** _____________
- **Status:** 🔴 Not Started
- **Issues Found:** _____________
- **Notes:** _____________

#### Round 2: Post-Fix Verification
- **Tester:** _____________
- **Date:** _____________
- **Status:** ⏳ Pending
- **Issues Found:** _____________
- **Notes:** _____________

---

## Issues Log

### Issue Template
```
**Issue ID:** UI-001
**Component:** .cta-button
**Severity:** High / Medium / Low
**Description:** Hover state not applying on mobile
**Steps to Reproduce:**
1. Open homepage on iPhone 14
2. Tap "Get Started" button
3. Observe no visual feedback

**Expected:** Button should show hover state
**Actual:** No visual change
**Fix:** Add :active state for mobile tap feedback
**Status:** 🔴 Open / 🟡 In Progress / 🟢 Fixed
```

### Active Issues
_No issues logged yet. Complete QA checklist to populate._

---

## Maintenance

**Review Frequency:** After every design change or component addition
**Owner:** Development team
**Last Full QA:** Never (initial document)
**Next Scheduled QA:** After flonest-transition branch merge

---

## Quick Reference: CSS Variables

### Colors
```css
--color-primary: #E2C33D          /* Flonest yellow */
--color-primary-hover: #D4B635    /* Hover state */
--color-secondary: #1F2937        /* Dark slate */
--text-on-primary: #000000        /* Black on yellow */
--text-on-dark: #FFFFFF           /* White on dark */
--text-primary: #000000           /* Body text */
--text-secondary: #374151         /* Muted text */
--text-muted: #6B7280             /* Very muted */
--bg-page: #F5F7FA                /* Page background */
--bg-card: #FFFFFF                /* Card background */
--border-color: #E5E7EB           /* Border gray */
```

### Spacing (8pt grid)
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
--spacing-4xl: 80px
```

### Typography
```css
--font-size-xs: 12px
--font-size-sm: 14px
--font-size-base: 16px
--font-size-lg: 18px
--font-size-xl: 20px
--font-size-2xl: 24px
--font-size-3xl: 32px
--font-size-4xl: 40px
--font-size-5xl: 48px
```

### Transitions
```css
--transition-fast: 150ms ease
--transition-base: 200ms ease
--transition-slow: 300ms ease
```

---

## Pages to Test

- [ ] `index.html` - Homepage (hero, features, business info)
- [ ] `about.html` - About page
- [ ] `pricing.html` - Pricing page
- [ ] `contact-us.html` - Contact page
- [ ] `policies.html` - Policies overview
- [ ] `privacy-policy.html` - Privacy policy
- [ ] `terms-and-conditions.html` - Terms & conditions
- [ ] `refund-and-cancellation.html` - Refund policy
- [ ] `shipping-policy.html` - Shipping/delivery policy

**Total:** 9 HTML pages × 8 components × 3 devices × 4 states = **864 test cases**

---

## Completion Tracking

**Overall Progress:** 0/864 test cases (0%)

### By Component
- [ ] Navigation: 0/72
- [ ] Buttons: 0/96
- [ ] Links: 0/144
- [ ] Cards: 0/216
- [ ] Typography: 0/144
- [ ] Forms: 0/0 (N/A)
- [ ] Special Components: 0/108
- [ ] Footer: 0/84

### By Device
- [ ] Desktop: 0/288
- [ ] Tablet: 0/288
- [ ] Mobile: 0/288

### By State
- [ ] Default: 0/216
- [ ] Hover: 0/216
- [ ] Active: 0/216
- [ ] Focus: 0/216

---

**END OF CHECKLIST**