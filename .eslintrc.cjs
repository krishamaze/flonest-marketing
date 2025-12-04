module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['local-rules'], // Uses eslint-plugin-local-rules which loads eslint-local-rules.js
  rules: {
    'local-rules/validate-pricing-cta': 'error'
  },
  overrides: [
    {
      files: ['src/config/pricing-cards.ts'],
      parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
      rules: {
        'local-rules/validate-pricing-cta': 'error'
      }
    }
  ]
};
