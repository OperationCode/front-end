import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintReact from '@eslint-react/eslint-plugin';
import eslintPluginVitest from '@vitest/eslint-plugin';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import { getDefaultCallees } from 'eslint-plugin-better-tailwindcss/defaults';
import noBarrelFiles from 'eslint-plugin-no-barrel-files';
import eslintPluginLodash from 'eslint-plugin-lodash';
import eslintPluginPlaywright from 'eslint-plugin-playwright';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';


const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** @type {import("eslint").Linter.Config['languageOptions']} */
const languageOptions = {
  parserOptions: {
    projectService: true,
    tsconfigRootDir: import.meta.dirname,
  },
  ecmaVersion: 'latest',
  sourceType: 'module',
};

export default defineConfig(
  // ── Global ignores (replaces .eslintignore) ──
  globalIgnores([
    'next-env.d.ts',
    'node_modules/**',
    '.next/**',
    '.github/**',
    'bin/**',
    'cypress-coverage/**',
    'vitest-coverage/**',
    'playwright-report/**',
    'test-results/**',
    'public/**',
    '*.svg',
    'prettier.config.js',
  ]),

  // ── Base configs ──
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  { languageOptions },

  // ── Next.js (via FlatCompat — @next/eslint-plugin-next doesn't export flat configs yet) ──
  ...compat.plugins('@next/next').map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx,js,jsx}'],
  })),
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      '@next/next/google-font-display': 'warn',
      '@next/next/google-font-preconnect': 'warn',
      '@next/next/next-script-for-ga': 'warn',
      '@next/next/no-async-client-component': 'error',
      '@next/next/no-before-interactive-script-outside-document': 'warn',
      '@next/next/no-css-tags': 'warn',
      '@next/next/no-head-element': 'warn',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-page-custom-font': 'warn',
      '@next/next/no-styled-jsx-in-document': 'warn',
      '@next/next/no-title-in-document-head': 'warn',
      '@next/next/no-typos': 'warn',
      '@next/next/no-unwanted-polyfillio': 'warn',
      '@next/next/inline-script-id': 'error',
      '@next/next/no-assign-module-variable': 'error',
      '@next/next/no-document-import-in-page': 'error',
      '@next/next/no-duplicate-head': 'error',
      '@next/next/no-head-import-in-document': 'error',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-script-component-in-head': 'error',
      '@next/next/no-sync-scripts': 'error',
    },
  },

  // ── React (via @eslint-react) ──
  {
    files: ['**/*.{ts,tsx}'],
    extends: [eslintReact.configs['recommended-typescript']],
  },

  // ── React Hooks / React Compiler (compiler-specific rules only; overlaps with @eslint-react disabled) ──
  {
    files: ['**/*.{ts,tsx}'],
    ...eslintPluginReactHooks.configs.flat['recommended-latest'],
    rules: {
      ...eslintPluginReactHooks.configs.flat['recommended-latest'].rules,
      'react-hooks/rules-of-hooks': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/use-memo': 'off',
      'react-hooks/component-hook-factories': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/error-boundaries': 'off',
      'react-hooks/purity': 'off',
      'react-hooks/set-state-in-render': 'off',
      'react-hooks/unsupported-syntax': 'off',
    },
  },

  // ── Import-X (replaces eslint-plugin-import) ──
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      'import-x/extensions': [
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
      'import-x/no-unresolved': 'off',
      'import-x/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import-x/order': [
        'error',
        { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] },
      ],
      'import-x/prefer-default-export': 'off',
      'import-x/no-named-as-default': 'off',
      'import-x/namespace': 'off',
    },
  },

  // ── Unicorn (individual rules, updated names from v43→v63) ──
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: { unicorn: eslintPluginUnicorn },
    rules: {
      'unicorn/catch-error-name': 'error',
      'unicorn/error-message': 'error',
      'unicorn/no-abusive-eslint-disable': 'error',
      'unicorn/no-array-callback-reference': 'error',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-unreadable-array-destructuring': 'error',
      'unicorn/no-zero-fractions': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-dom-node-append': 'error',
      'unicorn/prefer-dom-node-remove': 'error',
      'unicorn/prefer-query-selector': 'error',
      'unicorn/prefer-spread': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/prefer-dom-node-text-content': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/throw-new-error': 'error',
    },
  },

  // ── Lodash (v8 supports ESLint 9 natively) ──
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: { lodash: eslintPluginLodash },
    rules: {
      'lodash/import-scope': ['error', 'method'],
    },
  },

  // ── Better Tailwind CSS ──
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.test.{ts,tsx}'],
    plugins: { 'better-tailwindcss': eslintPluginBetterTailwindcss },
    rules: {
      ...eslintPluginBetterTailwindcss.configs.recommended.rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: './src/lib/styles/globals.css',
        callees: [...getDefaultCallees(), 'cn', 'cva'],
      },
    },
  },

  // ── No Barrel Files ──
  noBarrelFiles.flat,

  // ── CommonJS files ──
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },

  // ── Vanilla ESLint rules ──
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      'arrow-body-style': 'off',
      'class-methods-use-this': 'off',
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
              message: 'Please use `@/components/Form/Select/ThemedReactSelect` instead.',
            },
            {
              name: 'prop-types',
              importNames: ['default'],
              message:
                'Please use named imports of "prop-types".\n Example: "import { func } from \'prop-types\';"',
            },
            {
              name: 'react',
              importNames: ['default'],
              message: 'React is globally available for all page files.',
            },
            {
              name: 'tailwind-merge',
              importNames: ['twMerge'],
              message:
                'Please import `cn` from `@/lib/utils.ts` instead of directly from tailwind-merge.',
            },
            {
              name: 'class-variance-authority',
              importNames: ['cx', 'cva'],
              message:
                'Please import from `@/lib/utils.ts` instead of directly from class-variance-authority.',
            },
          ],
        },
      ],
      'no-use-before-define': 'off',
    },
  },

  // ── TypeScript files override ──
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-restricted-imports': 'off',

      '@typescript-eslint/consistent-type-imports': 'error',
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
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react-select',
              message: 'Please use `@/components/Form/Select/ThemedReactSelect` instead.',
            },
            {
              name: 'react',
              importNames: ['default'],
              message: 'React is globally available for all page files.',
            },
            {
              name: 'tailwind-merge',
              importNames: ['twMerge'],
              message:
                'Please import `cn` from `@/lib/utils.ts` instead of directly from tailwind-merge.',
            },
            {
              name: 'class-variance-authority',
              importNames: ['cx', 'cva'],
              message:
                'Please import from `@/lib/utils.ts` instead of directly from class-variance-authority.',
            },
          ],
        },
      ],
      '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', varsIgnorePattern: '_' }],
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },

  // ── Test files (Vitest) ──
  {
    files: [
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.test.js',
      '**/*.test.jsx',
      'src/test-utils/**/*.{ts,js}',
    ],
    plugins: { vitest: eslintPluginVitest },
    languageOptions: {
      globals: eslintPluginVitest.environments.env.globals,
    },
    rules: {
      ...eslintPluginVitest.configs.recommended.rules,
      'vitest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
      'vitest/expect-expect': ['error', { assertFunctionNames: ['expect', 'createSnapshotTest'] }],
      'vitest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
      'vitest/no-test-prefixes': 'error',
      'vitest/no-test-return-statement': 'error',
      'vitest/prefer-strict-equal': 'error',
      'vitest/valid-describe-callback': 'error',
    },
  },

  // ── TypeScript test files (relaxed rules) ──
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@eslint-react/component-hook-factories': 'off',
    },
  },

  // ── Playwright E2E tests ──
  {
    files: ['src/e2e/**/*.spec.ts'],
    ...eslintPluginPlaywright.configs['flat/recommended'],
    rules: {
      ...eslintPluginPlaywright.configs['flat/recommended'].rules,
      'func-names': 'off',
      'no-unused-expressions': 'off',
      'playwright/expect-expect': [
        'warn',
        { assertFunctionNames: ['expect', 'assertError', 'assertFailedLogin'] },
      ],
    },
  },

  // ── API routes: allow console ──
  {
    files: ['src/app/api/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },

  // ── Prettier (must be last) ──
  eslintPluginPrettierRecommended,
);
