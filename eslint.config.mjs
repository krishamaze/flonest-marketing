import localRulesPlugin from 'eslint-plugin-local-rules';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  {
    files: ["src/config/pricing-cards.ts"],
    plugins: {
      "local-rules": localRulesPlugin
    },
    rules: {
      "local-rules/validate-pricing-cta": "error"
    }
  },
  {
    files: ["src/config/footer-data.ts"],
    plugins: {
      "local-rules": localRulesPlugin
    },
    rules: {
      "local-rules/validate-footer-links": "error"
    }
  }
];
