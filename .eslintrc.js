module.exports = {
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'plugin:jest/recommended',
    'plugin:cypress/recommended',
  ],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    'cypress/globals': true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',

  plugins: ['prettier', 'unicorn', 'jest', 'cypress'],

  globals: {
    cy: true,
    Cypress: true,
  },

  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      rules: {
        'function-paren-newline': ['error', 'consistent'],
      },
    },
    {
      files: ['*.spec.js'],
      rules: {
        'no-unused-expressions': ['off'],
      },
    },
    {
      files: [
        'pages/**.js',
        'components/head.js',
        'components/nav.js',
        'components/Timeline/historyData.js',
      ],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: ['components/nav.js', 'components/Footer/Footer.js'],
      rules: {
        'jsx-a11y/anchor-is-valid': 'off',
      },
    },
    {
      files: ['cypress/**/*.js'],
      rules: {
        'jest/expect-expect': 'off',
        'jest/valid-expect': 'off',
        'func-names': 'off',
      },
    },
  ],

  rules: {
    // Import Rules
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always',
        jpg: 'always',
        json: 'always',
        png: 'always',
        svg: 'always',
      },
    ],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],

    // Jest Plugin Rules
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'it',
        withinDescribe: 'it',
      },
    ],
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'createShallowSnapshotTest', 'createSnapshotTest'],
      },
    ],
    'jest/lowercase-name': [
      'error',
      {
        ignore: ['describe'],
      },
    ],
    'jest/no-jasmine-globals': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/require-tothrow-message': 'error',
    'jest/valid-describe': 'error',

    // JSX Plugin Rules
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['Label'],
        labelAttributes: ['for'],
        controlComponents: ['Input', 'Select'],
      },
    ],

    // Prettier Plugin Rules
    'prettier/prettier': 'error',

    // React Plugin Rules
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any'],
      },
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': ['off'],

    // Unicorn Plugin Rules
    'unicorn/catch-error-name': 'error',
    'unicorn/error-message': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-fn-reference-in-iterator': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        whitelist: {
          ctx: true,
          defaultProps: true,
          getInitialProps: true,
          initialProps: true,
          mapStateToProps: true,
          mapDispatchToProps: true,
          propFullName: true,
          propValue: true,
          props: true,
          renderProps: true,
          requiredProps: true,
        },
      },
    ],
    'unicorn/throw-new-error': 'error',

    // Vanilla ESLint Rules
    'comma-dangle': ['error', 'only-multiline'],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
      },
    ],
    'multiline-ternary': ['error', 'always-multiline'],
    'no-console': 'warn',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-select',
            message: 'Please use `components/Form/Select/ThemedReactSelect` instead.',
          },
          {
            name: 'prop-types',
            importNames: ['default'],
            message:
              "Please use non-default imports of `prop-types`. Example: `import { func } from 'prop-types';`",
          },
        ],
      },
    ],
    'no-use-before-define': 'off',
  },
};
