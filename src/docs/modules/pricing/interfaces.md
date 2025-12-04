# Pricing Module Interfaces

The Pricing module must implement the following HTML structure contracts.

## 1. Page Layout
The page must strictly follow this hierarchy:
```html
<body>
  <header>...</header>   <!-- Shared Navigation -->
  <section class="page-header">...</section> <!-- Hero -->
  <div class="container">...</div> <!-- Pricing Grid -->
  <div class="container">...</div> <!-- Additional Features -->
  <footer>...</footer>   <!-- Shared Footer -->
</body>
```

## 2. Pricing Card Component
Each pricing option must use the `.pricing-card` class and contain:
- `.pricing-pill` (optional tag)
- `<h2>` (Plan Name)
- `.pricing-value` (Price)
- `.pricing-subtitle` (Description)
- `<ul>` (Feature List)
- `.cta-button` (Action)

## 3. Design Tokens (CSS Interface)
The module must consume these `styles.css` variables:
- `var(--color-primary)` for primary actions.
- `var(--text-primary)` for headings.
- `var(--text-secondary)` for body text.
- `var(--bg-page)` for page background.

