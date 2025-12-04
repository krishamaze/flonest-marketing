# 📸 Visual UI Testing Guide

## Overview

Visual UI testing uses screenshot comparison to detect unintended visual changes across different viewports, devices, and interaction states. This ensures visual consistency and catches regressions that functional tests might miss.

---

## 🎯 What Gets Tested

### Mobile Visual Tests (`mobile-visual.spec.js`)
- **30 tests** across 3 mobile devices (iPhone SE, iPhone 14, Samsung S21)
- Full page screenshots
- Component-level screenshots (header, hero, features, footer)
- Interaction states (menu open/closed, button hover, hamburger animation)
- Landscape orientation testing

### Visual Regression Tests (`visual-regression.spec.js`)
- **Cross-viewport testing** (7 viewports: 320px to 1920px)
- Responsive breakpoint verification
- Component state variations
- Dark mode compatibility
- Accessibility features (reduced motion, high contrast)
- Print styles

---

## 🚀 Quick Start

### First Time Setup - Generate Baseline Screenshots

```bash
cd tests

# Generate baseline screenshots for mobile visual tests
npm run test:visual:mobile -- --update-snapshots

# Generate baseline screenshots for all viewports
npm run test:visual:all -- --update-snapshots

# Or generate all visual baselines at once
npm run test:visual:update
```

This creates baseline screenshots in `tests/specs/__screenshots__/` directory.

### Running Visual Tests

```bash
# Run all visual tests (mobile + regression)
npm run test:visual

# Run only mobile visual tests
npm run test:visual:mobile

# Run all viewport regression tests
npm run test:visual:all

# Run with visible browser
npm run test:visual:headed

# Run with Playwright UI (interactive)
npm run test:visual:ui
```

---

## 📊 Test Coverage

### Mobile Devices Tested
| Device | Viewport | Tests |
|--------|----------|-------|
| iPhone SE | 375×667 | 10 visual tests |
| iPhone 14 | 390×844 | 10 visual tests |
| Samsung S21 | 360×800 | 10 visual tests |
| iPhone SE Landscape | 667×375 | 3 visual tests |

### All Viewports Tested
| Viewport | Width | Category |
|----------|-------|----------|
| mobile-320 | 320px | Small mobile |
| mobile-375 | 375px | Standard mobile |
| mobile-414 | 414px | Large mobile |
| tablet-768 | 768px | Tablet portrait |
| tablet-1024 | 1024px | Tablet landscape |
| desktop-1366 | 1366px | Small desktop |
| desktop-1920 | 1920px | Large desktop |

---

## 📸 What Gets Captured

### Per Device Screenshots
1. **Full Page** - Complete page from top to bottom
2. **Header** - Navigation in closed state
3. **Header Open** - Navigation with menu expanded
4. **Hero Section** - Above-the-fold content
5. **Features Section** - Feature cards layout
6. **Individual Feature Card** - Single card detail
7. **Business Info** - Business information section
8. **Footer** - Footer component
9. **CTA Buttons** - Normal and hover states
10. **Hamburger Menu** - Closed and open (X) states

### Interaction States
- Button hover effects
- Navigation link hover states
- Feature card hover animations
- Menu open/close transitions
- Scrolled page states

### Special Tests
- Responsive breakpoint transitions (767px → 769px)
- Dark mode rendering
- Light mode rendering
- Reduced motion preference
- High contrast mode
- Print media styles

---

## 🔍 How Visual Testing Works

### 1. Baseline Creation
First run creates baseline screenshots:
```bash
npm run test:visual:update
```

### 2. Comparison
Subsequent runs compare against baselines:
```bash
npm run test:visual
```

### 3. Failure Detection
If pixels differ beyond threshold:
- Test fails
- Diff image generated showing differences
- Actual vs Expected comparison available in report

### 4. Updating Baselines
When intentional changes are made:
```bash
npm run test:visual:update
```

---

## 📁 Screenshot Organization

```
tests/
└── specs/
    ├── mobile-visual.spec.js
    ├── visual-regression.spec.js
    └── __screenshots__/
        ├── mobile-visual.spec.js/
        │   ├── iphone-se-full-page.png
        │   ├── iphone-se-header-closed.png
        │   ├── iphone-se-header-open.png
        │   └── ...
        └── visual-regression.spec.js/
            ├── mobile-320-homepage.png
            ├── desktop-1920-homepage.png
            └── ...
```

---

## 🎨 Visual Test Configuration

### Screenshot Options
```javascript
await expect(page).toHaveScreenshot('name.png', {
  fullPage: true,              // Capture entire page
  animations: 'disabled',      // Disable animations
  maxDiffPixels: 100,         // Allow minor differences
  threshold: 0.2,             // Pixel difference threshold
});
```

### Viewport Configuration
Tests use `test.use({ viewport: { width, height } })` to set viewport size.

---

## 🔧 Common Commands

```bash
# Generate/update all baselines
npm run test:visual:update

# Run all visual tests
npm run test:visual

# Run mobile visual tests only
npm run test:visual:mobile

# Run with UI for debugging
npm run test:visual:ui

# Run specific test file
npx playwright test mobile-visual.spec.js

# Update specific test baselines
npx playwright test mobile-visual.spec.js --update-snapshots

# Run on specific device
npx playwright test mobile-visual.spec.js --project=iphone-14

# View test report
npm run report
```

---

## 🐛 Debugging Visual Failures

### When a Visual Test Fails

1. **Check the Report**
   ```bash
   npm run report
   ```
   - View actual vs expected screenshots
   - See diff highlighting changes

2. **Review the Diff**
   - Red areas show removed pixels
   - Green areas show added pixels
   - Yellow shows modified pixels

3. **Determine if Change is Intentional**
   - **Intentional**: Update baseline with `--update-snapshots`
   - **Bug**: Fix the code causing visual regression

4. **Update Baseline if Needed**
   ```bash
   npm run test:visual:update
   ```

---

## 📋 Visual Testing Checklist

Before committing code, verify:

- [ ] All visual tests pass
- [ ] No unintended visual changes
- [ ] New features have visual test coverage
- [ ] Baselines updated for intentional changes
- [ ] Screenshots reviewed in test report
- [ ] Mobile and desktop views tested
- [ ] Interaction states captured
- [ ] Responsive breakpoints verified

---

## 🎯 Best Practices

### 1. Disable Animations
Always use `animations: 'disabled'` for consistent screenshots.

### 2. Wait for Network Idle
```javascript
await page.waitForLoadState('networkidle');
```

### 3. Allow Minor Differences
Use `maxDiffPixels` for anti-aliasing variations:
```javascript
maxDiffPixels: 100
```

### 4. Test Interaction States
Capture before/after states:
- Hover effects
- Menu open/closed
- Button states

### 5. Update Baselines Carefully
Only update when changes are intentional and reviewed.

### 6. Use Descriptive Names
```javascript
`${deviceName}-${component}-${state}.png`
```

---

## 🚨 Common Issues

### Issue: Screenshots differ on different machines
**Solution**: Use consistent viewport sizes and disable animations.

### Issue: Font rendering differences
**Solution**: Use `maxDiffPixels` to allow minor anti-aliasing differences.

### Issue: Flaky tests due to animations
**Solution**: Add `await page.waitForTimeout()` after interactions.

### Issue: Large baseline files
**Solution**: Use component-level screenshots instead of always full-page.

---

## 📊 Visual Test Metrics

### Current Coverage
- **Total Visual Tests**: ~100+
- **Mobile Devices**: 3
- **Viewports**: 7
- **Components**: 8 per device
- **Interaction States**: 15+
- **Special Modes**: 5 (dark, light, reduced motion, high contrast, print)

---

## 🔄 CI/CD Integration

### In CI Pipeline
```bash
# Run visual tests in CI
npm run test:visual

# Tests will fail if screenshots don't match baselines
# Commit baseline screenshots to version control
```

### Updating Baselines in CI
```bash
# Only update baselines on main branch after review
npm run test:visual:update
git add tests/specs/__screenshots__/
git commit -m "Update visual test baselines"
```

---

## 📚 Additional Resources

- [Playwright Visual Comparisons](https://playwright.dev/docs/test-snapshots)
- [Mobile Testing Guide](MOBILE_TESTING_GUIDE.md)
- [UI QA Checklist](UI_QA_CHECKLIST.md)

---

**Visual testing ensures your UI looks perfect across all devices and viewports! 📸✨**

