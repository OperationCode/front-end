const path = require('path');

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
          plugins: [
            require('postcss-import')({ root: path.join(__dirname, '../') }),
            require('postcss-export-custom-variables')({
              exporter: 'js',
              destination: 'common/styles/themeMap.js',
            }),
            // except no autoprefixer - assuming dev has modern browser to decrease build speed
          ],
        },
      },
    ],
  });

  // Return the altered config
  return storybookBaseConfig;
};
