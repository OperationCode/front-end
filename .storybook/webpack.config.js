const path = require('path');
const svgoConfig = require('../common/config/svgo');
<<<<<<< HEAD
=======
const postCSSConfig = require('../postcss.config');
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push(
    {
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
          loader: 'postcss-loader',
          options: {
            plugins: [
<<<<<<< HEAD
              require('postcss-import')({ root: path.join(__dirname, '../') }),
=======
              // Use PostCSS.config.js, but also use `postcss-export-custom-variables` plugin
              ...postCSSConfig({
                file: {
                  dirname: '../',
                },
                options: storybookBaseConfig,
                env: configType.toLowerCase(),
              }).plugins,
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
              require('postcss-export-custom-variables')({
                exporter: 'js',
                destination: 'common/styles/themeMap.js',
              }),
<<<<<<< HEAD
              require('autoprefixer')(),
=======
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
            ],
          },
        },
      ],
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'react-svg-loader',
          options: {
            svgo: svgoConfig,
          },
        },
      ],
    },
  );

  // Return the altered config
  return storybookBaseConfig;
};
