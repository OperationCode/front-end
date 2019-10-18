const path = require('path');
const svgoConfig = require('../common/config/svgo');
const postCSSConfig = require('../postcss.config');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // mode has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // remove existing css-loader rules
  config.module.rules = config.module.rules.filter(f => f.test.toString() !== '/\\.css$/');

  //required for importing svgs
  config.resolve.extensions.push('.svg');

  config.node = { fs: 'empty' };
  // extend config to our liking
  config.module.rules.push(
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
                options: config,
                env: mode.toLowerCase(),
              }).plugins,
              require('postcss-export-custom-variables')({
                exporter: 'js',
                destination: 'common/styles/themeMap.js',
              }),
            ],
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
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

  config.module.rules = config.module.rules.map(data => {
    if (/svg\|/.test(String(data.test)))
      data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

    return data;
  });

  // Return the altered config
  return config;
};
