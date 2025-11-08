/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import magicalSvg from 'vite-plugin-magical-svg';

export default defineConfig({
  plugins: [tsconfigPaths(), magicalSvg({ target: 'react' }), react()],
  // use tsx loader for js using jsx
  // TODO - remove if ever migrating to Vite
  esbuild: {
    loader: 'tsx',
    include: /\.[jt]sx?$/,
    exclude: [],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./**/*.test.ts', './**/*.test.tsx', './**/*.test.js', './**/*.test.jsx'],
    setupFiles: './vitest.setup.tsx',
    minWorkers: 1,
    maxWorkers: 2,
    css: {
      include: /\.module\.css$/,
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true,
      reportsDirectory: './vitest-coverage',
      include: [
        'common/**/*.{js,ts,tsx}',
        'components/**/*.{js,ts,tsx}',
        'decorators/**/*.{js,ts,tsx}',
      ],
      exclude: [
        // Irrelevant configs and local-only scripts
        'coverage/**',
        '{cypress,vitest}-coverage/**',
        'dist/**',
        '.storybook-dist/**',
        '.next/**',
        '**/*.d.ts',
        '{karma,rollup,webpack,vite,vitest,jest,ava,playwright,build}.config.*',
        'vitest.{workspace,projects}.[jt]s?(on)',
        '.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
        'scripts/**',
        'test-utils/**',

        // Folders covered by integration tests
        'node_modules/**',
        'cypress/**',
        'common/config/**',
        'common/styles/**',
        'common/constants/**',

        // No real logic to test here
        'common/utils/api-utils.{[jt]s}',
        'components/ZipRecruiterJobs/ZipRecruiterJobs.{[jt]s}',
        'components/Press/PressLinks/Articles.{[jt]s}',
        'components/Timeline/historyData.{[jt]s}',

        // Don't collect coverage from import/export mappers
        'common/(.*)/index.{[jt]s}',
        'components/(.*)/index.{[jt]s}',
      ],
    },
  },
});
