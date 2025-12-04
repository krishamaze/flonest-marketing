# 📱 Mobile Testing - Quick Reference Card

## 🎯 Four Ways to Test

| Method | Best For | Command/Action |
|--------|----------|----------------|
| **Interactive Viewer** | Quick visual checks | Open `mobile-test-viewer.html` |
| **Automated Tests** | Comprehensive testing | `cd tests && npm run test:mobile` |
| **Visual UI Tests** | Visual regression | `cd tests && npm run test:visual` |
| **Browser DevTools** | Manual inspection | Open site → F12 → Ctrl+Shift+M |

---

## ⚡ Quick Commands

```bash
# Interactive Viewer
start mobile-test-viewer.html

# Automated Tests
cd tests
npm run test:mobile              # All mobile tests
npm run test:mobile:headed       # With visible browser
npm run test:mobile:ui           # Interactive UI mode
npm run test:mobile:iphone       # iPhone 14 only
npm run test:mobile:android      # Samsung S21 only

# Visual UI Tests
npm run test:visual              # Run visual tests
npm run test:visual:headed       # With visible browser
npm run test:visual:ui           # Interactive UI mode
npm run test:visual:update       # Update baselines

# View Reports
npm run report                   # View HTML report

# Manual Testing
python -m http.server 8000       # Start server
# Then: http://localhost:8000 + DevTools
```

---

## 📱 Test Viewports

| Device | Width | Breakpoint |
|--------|-------|------------|
| iPhone SE (Small) | 320px | Smallest mobile |
| Samsung S21 | 360px | Standard Android |
| iPhone SE | 375px | Standard iPhone |
| iPhone 14 | 390px | Modern iPhone |
| Large Mobile | 414px | Plus/Max models |
| Tablet | 768px | iPad/Tablet |

---

## ✅ Testing Checklist

### Navigation
- [ ] Hamburger menu visible on mobile
- [ ] Menu opens/closes correctly
- [ ] All links accessible
- [ ] Animation smooth

### Layout
- [ ] No horizontal scrolling
- [ ] Content stacks vertically
- [ ] Proper spacing
- [ ] Images scale correctly

### Touch Targets
- [ ] Buttons ≥44×44px
- [ ] Links properly sized
- [ ] Adequate spacing
- [ ] Easy to tap

### Content
- [ ] Text readable (≥12px)
- [ ] Hero section clear
- [ ] CTAs prominent
- [ ] Footer formatted

---

## 🎨 Interactive Viewer Controls

| Control | Function |
|---------|----------|
| Device Dropdown | Select mobile device |
| 🔄 Rotate | Switch orientation |
| ↻ Reload | Refresh preview |
| Device Info Badge | Shows current dimensions |

---

## 📊 Current Test Status

✅ **58/58 Functional Tests Passed**
- Navigation: ✅ All passed
- Touch Targets: ✅ All passed
- Layout: ✅ All passed
- Responsiveness: ✅ All passed
- Content: ✅ All passed

✅ **88/88 Visual UI Tests Passed**
- iPhone 14: ✅ All passed
- iPhone SE: ✅ All passed
- Samsung S21: ✅ All passed
- Cross-browser: ✅ All passed

---

## 🚨 Common Issues to Check

1. **Horizontal Scroll** → Check element widths
2. **Tiny Text** → Ensure ≥12px font size
3. **Small Buttons** → Ensure ≥44×44px
4. **Overlapping** → Check z-index and positioning
5. **Hidden Content** → Verify visibility on mobile

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `MOBILE_TESTING_SUMMARY.md` | Quick start guide |
| `MOBILE_TESTING_GUIDE.md` | Comprehensive guide |
| `MOBILE_TEST_RESULTS.md` | Detailed test results |
| `VISUAL_UI_TESTS_SUMMARY.md` | Visual testing guide |
| `VISUAL_TESTING_GUIDE.md` | Visual testing details |
| `mobile-test-viewer.html` | Interactive viewer |
| `tests/specs/mobile-responsive.spec.js` | Functional tests |
| `tests/specs/mobile-visual-simple.spec.js` | Visual tests |

---

## 🎯 What's Currently Open

1. ✅ **Interactive Viewer** - In your browser
2. ✅ **Playwright Report** - Running on local server
3. ✅ **Test Results** - 58/58 passed

---

## 💡 Pro Tips

- Use **Interactive Viewer** for quick demos
- Use **Automated Tests** for regression testing
- Use **DevTools** for debugging specific issues
- Test on **real devices** when possible
- Check **landscape orientation** too

---

## 🔗 Quick Links

- [Testing Guide](MOBILE_TESTING_GUIDE.md)
- [Test Results](MOBILE_TEST_RESULTS.md)
- [UI Checklist](UI_QA_CHECKLIST.md)
- [Playwright Config](tests/playwright.config.js)

---

**Need Help?** Check `MOBILE_TESTING_GUIDE.md` for detailed instructions.

