const svgoConfig = require('../common/config/svgo');
const postCSSConfig = require('../postcss.config');

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
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              // Use PostCSS.config.js, but also use `postcss-export-custom-variables` plugin
              ...postCSSConfig({
                file: {
                  dirname: '../',
                },
                options: storybookBaseConfig,
                env: configType.toLowerCase(),
              }).plugins,
              require('postcss-export-custom-variables')({
                exporter: 'js',
                destination: 'common/styles/themeMap.js',
              }),
            ],
          },
        },
      ],
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig,
          },
        },
      ],
    },
  );

  // Return the altered config
  return storybookBaseConfig;
};
