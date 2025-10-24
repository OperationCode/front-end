/* eslint-disable global-require */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
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
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setupNodeEvents(on: any, config: any) {
      return require('./cypress/plugins/index')(on, config);
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
