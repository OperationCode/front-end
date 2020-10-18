module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      startServerCommand: 'yarn start',
      url: ['https://operationcode.org/'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
        'dom-size': ['warn', { maxNumericValue: 2500 }],
        'first-contentful-paint': ['error', { maxNumericValue: 3000 }],
        interactive: ['error', { maxNumericValue: 8000 }],
      },
    },
  },
};
