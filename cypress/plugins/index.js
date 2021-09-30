// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const webpack = require('@cypress/webpack-preprocessor');
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// eslint-disable-next-line no-unused-vars
/* eslint-disable global-require */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  addMatchImageSnapshotPlugin(on, config);
  require('@cypress/code-coverage/task')(on, config);
  on('file:preprocessor', require('@cypress/code-coverage/use-browserify-istanbul'));

  // this fixes aliasing in cypres e2e tests
  // https://github.com/cypress-io/cypress/issues/3262#issuecomment-462646891
  on(
    'file:preprocessor',
    webpack({
      webpackOptions: { resolve: { alias: require('../../pathAliases') } },
      watchOptions: {},
    }),
  );
  return config;
};
