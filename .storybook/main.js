const webpack = require('webpack');
const path = require('path');
const svgoConfig = require('../common/config/svgo');
const postCSSConfig = require('../postcss.config');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../components/**/__stories__/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          sourceMap: true,
          modules: {
            localIdentName: '[name]_[local]__[hash:base64:5]',
          },
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            config: path.resolve(__dirname, '../postcss.config.js'),
          },
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    // 'configType' has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.extensions.push('.svg');
    config.module.rules = config.module.rules.map(data => {
      if (/svg\|/.test(String(data.test)))
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
      return data;
    });

    // extend config to our liking
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: svgoConfig,
          },
        },
      ],
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          domains: [],
          path: '/',
          loader: 'default',
        }),
      }),
    );
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    );
    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
