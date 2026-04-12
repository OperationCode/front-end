/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import magicalSvg from 'vite-plugin-magical-svg';

export default defineConfig({
  plugins: [magicalSvg({ target: 'react' }), react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      './src/**/*.test.ts',
      './src/**/*.test.tsx',
      './src/**/*.test.js',
      './src/**/*.test.jsx',
    ],
    setupFiles: './vitest.setup.tsx',
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
        'src/lib/**/*.{js,ts,tsx}',
        'src/components/**/*.{js,ts,tsx}',
        'src/decorators/**/*.{js,ts,tsx}',
      ],
      exclude: [
        // Irrelevant configs and local-only scripts
        'coverage/**',
        '{cypress,vitest}-coverage/**',
        'dist/**',
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
        'src/lib/config/**',
        'src/lib/styles/**',
        'src/lib/constants/**',

        // No real logic to test here
        'src/lib/utils/api-utils.{[jt]s}',
        'src/components/ZipRecruiterJobs/ZipRecruiterJobs.{[jt]s}',
        'src/components/Press/PressLinks/Articles.{[jt]s}',
        'src/components/Timeline/historyData.{[jt]s}',

        // Don't collect coverage from import/export mappers
        'src/lib/(.*)/index.{[jt]s}',
        'src/components/(.*)/index.{[jt]s}',
      ],
    },
  },
});
