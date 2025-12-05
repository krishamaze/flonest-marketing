# Container Query Migration Queue

Analysis of viewport-based patterns and recommendation for container query migration.

## Audit Date: December 2024

---

## ✅ Completed

| File | Pattern | Status |
|------|---------|--------|
| `src/pages/Home.tsx` | Feature grid `md:grid-cols-3` | ✅ Migrated to `cq:grid-cols-3` |
| `src/lib/hooks/use-mobile.tsx` | `window.innerWidth` | ✅ Refactored to use `matchMedia.matches` |

---

## 🟡 Candidates for Migration (Low Priority)

These use viewport queries but could benefit from container queries if components become reusable.

### Batch 1: Feature/Card Grids (Similar Pattern to Home.tsx)

| File | Line | Current Pattern | Recommendation |
|------|------|-----------------|----------------|
| `src/pages/Pricing.tsx` | 110 | `md:grid-cols-3` | **Migrate** - Same 3-col grid pattern |
| `src/pages/About.tsx` | 86, 117 | `md:grid-cols-3` | **Migrate** - Reusable card grids |

**Effort:** Low - Same pattern already implemented  
**Risk:** Low - Pure styling change

---

## ⚪ Keep As-Is (No Migration Needed)

These patterns are page-level or work correctly with viewport queries.

| File | Line | Pattern | Reason to Keep |
|------|------|---------|----------------|
| `src/components/Footer.tsx` | 33 | `grid-cols-2 md:grid-cols-4` | Footer spans full width, viewport-based is correct |
| `src/components/ui/sidebar.tsx` | 210 | `hidden md:block` | Navigation visibility toggle - proper use of viewport |
| `src/components/Header.tsx` | - | Various `md:` classes | Page-level layout, not reusable component |

---

## 📋 Migration Checklist

When migrating a component:

1. [ ] Verify component may be reused in different container widths
2. [ ] Add `container-inline` class to the container wrapper
3. [ ] Replace `md:grid-cols-X` with `cq:grid-cols-X`
4. [ ] Replace `md:gap-X` with `cq:gap-X` (if applicable)
5. [ ] Keep viewport-based text sizing (`md:text-lg`) - these are fine
6. [ ] Test at 320, 375, 768, 1024px widths
7. [ ] Run visual regression tests
8. [ ] Commit as atomic change

---

## Decision Criteria

**Migrate to Container Queries when:**
- ✅ Component renders a grid of cards/items
- ✅ Component could be placed in sidebars, modals, or narrower containers
- ✅ Grid column count is the primary responsive concern

**Keep Viewport Queries when:**
- ⚪ Component always spans full page width (headers, footers)
- ⚪ Pattern is visibility toggle (`hidden md:block`)
- ⚪ Text sizing only (no layout impact)
- ⚪ Component is page-specific, not reusable

---

## Notes

The expert recommendation emphasized using container queries for **component-level responsiveness**. However, for a marketing site where most components span full width, the immediate benefit is limited.

**Priority:** Address only when:
1. Adding new reusable grid components
2. Refactoring existing pages for other reasons
3. Embedding components in narrower containers (modals, sidebars)

*Do not bulk-migrate working patterns just for consistency.*
