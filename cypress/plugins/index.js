/* eslint-disable global-require */

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const path = require('path');
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const webpack = require('@cypress/webpack-preprocessor');

module.exports = (
  on, // `on` is used to hook into various events Cypress emits
  config, // `config` is the resolved Cypress config
) => {
  // this fixes aliasing in cypres e2e tests
  // https://github.com/cypress-io/cypress/issues/3262#issuecomment-462646891
  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          alias: {
            '@': path.resolve(__dirname, '../..'),
          },
        },
      },
      watchOptions: {},
    }),
  );

  if (!!process.env.CI) {
    addMatchImageSnapshotPlugin(on, config);
    require('@cypress/code-coverage/task')(on, config);
    on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
  }

  return config;
};
