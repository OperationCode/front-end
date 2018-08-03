const path = require('path');
const postCssConfig = require('../postcss.config');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    loaders: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]_[local]__[hash:base64:5]',
          sourceMap: true,
          sourceMapContents: true,
        },
      },
      {
        // Keep in parity with root postcss.config.js until
        // https://github.com/storybooks/storybook/issues/2455
        // is resolved
        loader: 'postcss-loader',
        options: {
          'postcss-import': { root: '../' },
          'postcss-export-custom-variables': {
            exporter: 'js',
            destination: 'common/styles/themeMap.js',
          },
          autoprefixer:
            configType === 'PRODUCTION'
              ? {
                  ...options.autoprefixer,
                  browsers: ['1%', 'last 2 Chrome versions', 'not ie < 11'],
                  flexbox: 'no-2009',
                }
              : false,
        },
      },
    ],
  });

  // Return the altered config
  return storybookBaseConfig;
};
