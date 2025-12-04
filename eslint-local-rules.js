// Custom lint rules for Pricing Module enforcement.
// Note: For eslint-plugin-local-rules, we export the rule object directly keyed by rule name
// BUT eslint-plugin-local-rules expects module.exports to be the object of rules.
module.exports = {
  'validate-pricing-cta': {
    meta: { type: 'problem' },
    create(context) {
      return {
        Property(node) {
          if (node.key.name === 'ctaHref') {
            const value = node.value.value || '';
            if (value.startsWith('http')) {
              context.report({
                node,
                message: 'ctaHref must be internal — external checkout forbidden'
              });
            }
          }
          if (node.key.name === 'price') {
            const value = node.value.value || '';
            if (!value.includes('₹') && !value.includes('INR')) {
              context.report({
                node,
                message: 'price must contain INR or ₹'
              });
            }
          }
        }
      };
    }
  },
  'validate-footer-links': {
    meta: { type: 'problem' },
    create(context) {
      return {
        Property(node) {
          // Block external links
          if (node.key.name === 'href') {
            const value = node.value.value || '';
            if (value.startsWith('http') || value.startsWith('//')) {
              context.report({ node, message: 'Footer links must be internal only' });
            }
          }

          // GSTIN must be non-empty
          if (node.key.name === 'gstin') {
            const value = node.value.value || '';
            if (!value || value.length < 5) {
              context.report({ node, message: 'GSTIN must be provided and valid' });
            }
          }
        }
      };
    }
  }
};
