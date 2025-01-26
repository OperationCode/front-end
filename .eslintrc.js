/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:cypress/recommended',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    'cypress/globals': true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  plugins: [
    'prettier',
    'unicorn',
    'cypress',
    '@operation_code/custom-rules',
    'import',
    'lodash',
    '@typescript-eslint',
  ],
  globals: {
    cy: true,
    Cypress: true,
  },
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
        stories: 'always',
      },
    ],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': [
      'error',
      { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] },
    ],
    'import/prefer-default-export': 'off',

    // OC eslint Plugin Rules
    '@operation_code/custom-rules/proptype-definition-above-fn': 'error',

    // JSX-A11Y Plugin Rules
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

    // Lodash Plugin Rules
    'lodash/import-scope': ['error', 'method'],

    // Prettier Plugin Rules
    'prettier/prettier': 'error',

    // React Plugin Rules
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: ['arrow-function', 'function-expression'],
      },
    ],
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-no-target-blank': 'off', // browsers protect against this vulnerability now
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': ['off'],
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': ['off'],

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
    'unicorn/throw-new-error': 'error',

    // Vanilla ESLint Rules
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'implicit-arrow-linebreak': 'off',
    'multiline-ternary': 'off',
    'no-console': 'warn',
    'no-extra-boolean-cast': 'off',
    'no-promise-executor-return': 'off',
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
            message: `Please use named imports of "prop-types".\n Example: "import { func } from 'prop-types';"`,
          },
          {
            name: 'formik',
            importNames: ['Form'],
            message: `Please use our Form component to have good defaults defined.\n "import Form from 'components/Form/Form';"`,
          },
          {
            name: 'react',
            importNames: ['default'],
            message: 'React is globally availble for all page files.',
          },
        ],
      },
    ],
    'no-use-before-define': 'off',
  },
  overrides: [
    {
      files: ['./**/*.test.js', './**/*.test.jsx', './**/*.test.ts', './**/*.test.tsx'],
      plugins: ['vitest'],
      extends: ['plugin:vitest-globals/recommended', 'plugin:vitest/recommended'],
      env: {
        'vitest-globals/env': true,
      },
      rules: {
        'vitest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
        'vitest/expect-expect': [
          'error',
          { assertFunctionNames: ['expect', 'createShallowSnapshotTest', 'createSnapshotTest'] },
        ],
        'vitest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
        'vitest/no-test-prefixes': 'error',
        'vitest/no-test-return-statement': 'error',
        'vitest/prefer-strict-equal': 'error',
        'vitest/valid-describe-callback': 'error',
      },
    },
    {
      files: ['./**/*.ts', './**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true,
      },
      extends: ['plugin:@typescript-eslint/strict', 'plugin:@typescript-eslint/stylistic'],
      rules: {
        // Deactivate rules not meant for TS
        'no-restricted-imports': 'off',

        // React Plugin Rules
        'react/prop-types': 'off', // https://github.com/jsx-eslint/eslint-plugin-react/issues/3651
        'react/no-array-index-key': 'off',
        'react/require-default-props': 'off',

        // Typescript Rules
        '@typescript-eslint/consistent-type-imports': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase', 'UPPER_CASE'],
            prefix: [
              'is',
              'are',
              'was',
              'should',
              'has',
              'can',
              'did',
              'will',
              'IS_',
              'ARE_',
              'WAS_',
              'SHOULD_',
              'HAS_',
              'CAN_',
              'DID_',
              'WILL_',
            ],
          },
        ],
        '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'react-select',
                message: 'Please use `components/Form/Select/ThemedReactSelect` instead.',
              },
              {
                name: 'formik',
                importNames: ['Form'],
                message: `Please use our Form component to have good defaults defined.\n "import Form from 'components/Form/Form';"`,
              },
              {
                name: 'react',
                importNames: ['default'],
                message: 'React is globally availble for all page files.',
              },
            ],
          },
        ],
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', varsIgnorePattern: '_' }],
        '@typescript-eslint/unbound-method': 'off', // gives false negatives in arrow funcs
      },
    },
    {
      files: ['./**/*.test.ts', './**/*.test.tsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['./pages/api/**/*.ts'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['cypress/**/*.js'],
      rules: {
        'func-names': 'off',
        'vitest/expect-expect': 'off',
        'vitest/valid-expect': 'off',
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
      rules: { 'jsx-a11y/anchor-is-valid': 'off' },
    },
  ],
  root: true,
};
