// Custom lint rules for Pricing Module enforcement.
module.exports = {
  rules: {
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
    }
  }
};

