# Container Query Utilities (2025 Standard)

This document describes the CSS container query utilities added to the Flonest marketing codebase following the expert-recommended 2025 web standards.

## Overview

Container queries base styles on **parent container dimensions** rather than **viewport size**, making components truly reusable across different layouts. This is the modern standard for component-level responsiveness.

## Available Utilities

### Container Definition

| Class | CSS Property | Usage |
|-------|--------------|-------|
| `.container-inline` | `container-type: inline-size` | Apply to parent element to enable width-based container queries |
| `.container-size` | `container-type: size` | Apply for both width and height queries (rare) |

### Container Query Responsive Classes

Prefix: `cq:` (container query)

| Class | Breakpoint | Description |
|-------|------------|-------------|
| `cq:grid-cols-2` | `@container (min-width: 600px)` | 2-column grid when container ≥600px |
| `cq:grid-cols-3` | `@container (min-width: 900px)` | 3-column grid when container ≥900px |
| `cq:p-6` | `@container (min-width: 400px)` | Padding 1.5rem when container ≥400px |
| `cq:gap-6` | `@container (min-width: 400px)` | Gap 1.5rem when container ≥400px |
| `cq:flex-row` | `@container (min-width: 400px)` | Flex row direction when container ≥400px |

## Usage Pattern

```jsx
// ✅ Correct: Container query responsive grid
<div className="container-inline grid grid-cols-2 cq:grid-cols-3 gap-4 cq:gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

// ❌ Avoid: Viewport-based when component could be reused
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
```

## When to Use Container Queries vs Viewport Queries

### Use Container Queries (`cq:`) When:
- The component may be embedded in different sized containers
- You're building reusable card grids, feature sections, or similar
- The parent container width varies independently of viewport

### Keep Viewport Queries (`md:`, `lg:`) When:
- Layout is page-level (header, footer, main layout)
- Component will always span full viewport width
- Visibility toggle (`hidden md:block`) for navigation

## Implementation Details

The utilities are defined in `src/index.css`:

```css
/* Container Query Utilities (2025 Standard) */
@layer utilities {
  .container-inline {
    container-type: inline-size;
  }
}

@container (min-width: 600px) {
  .cq\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@container (min-width: 900px) {
  .cq\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

## Browser Support

Container queries are supported in all major browsers as of 2023:
- Chrome 105+
- Firefox 110+
- Safari 16+
- Edge 105+

No polyfill needed for modern browser targets.

## Adding New Container Query Classes

When adding new `cq:` utilities, follow this pattern in `src/index.css`:

```css
@container (min-width: XXXpx) {
  .cq\:your-class-name {
    /* your styles */
  }
}
```

Use the `\:` escape for the colon in CSS class names.

## Related Files

- `src/index.css` - Container query utility definitions
- `src/pages/Home.tsx` - Feature grid using container queries
- `src/lib/hooks/use-mobile.tsx` - Hook using matchMedia (prefer CSS where possible)

---

*Last updated: December 2024*
