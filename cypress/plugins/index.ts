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
const { DefinePlugin } = require('webpack');
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// eslint-disable-next-line no-unused-vars
/* eslint-disable global-require */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = (on: any, config: any) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  if (!!process.env.CI) {
    addMatchImageSnapshotPlugin(on, config);
    require('@cypress/code-coverage/task')(on, config);
    on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
  }

  // this fixes aliasing in cypres e2e tests
  // https://github.com/cypress-io/cypress/issues/3262#issuecomment-462646891
  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          alias: require('../../pathAliases'),
          extensions: ['.js', '.ts', '.tsx'],
        },
        plugins: [
          new DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify(process.env.NODE_ENV),
              PRODUCTION_DEPLOYMENT: JSON.stringify(false),
            },
          }),
        ],
        module: {
          rules: [
            {
              test: /\.(js|ts|tsx)$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-typescript'],
                  },
                },
              ],
            },
          ],
        },
      },
      watchOptions: {},
    }),
  );

  console.log(process.env);

  return config;
};
