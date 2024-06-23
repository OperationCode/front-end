import { defineConfig } from 'cypress';
import cypressCodeCoverage from '@cypress/code-coverage/task';
import cypressCodeUseBabelrc from '@cypress/code-coverage/use-babelrc';

export default defineConfig({
  projectId: 'dbquo6',
  viewportWidth: 1600,
  viewportHeight: 1200,
  requestTimeout: 10000,
  env: {
    RETRIES: 2,
    codeCoverage: {
      url: '/api/__coverage__',
    },
  },
  retries: {
    runMode: 2,
    openMode: 2,
  },
  e2e: {
    setupNodeEvents(on, config) {
      if (!!process.env.CI) {
        cypressCodeCoverage(on, config);
        on('file:preprocessor', cypressCodeUseBabelrc);
      }

      return config;
    },
    baseUrl: 'http://localhost:3000',
    specPattern: './**/*.spec.cy.ts',
  },
});
