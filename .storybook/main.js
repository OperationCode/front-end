const svgoConfig = require('../common/config/svgo');

const config = {
  stories: ['../components/**/__stories__/*.stories.js'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      /** @see https://storybook.js.org/recipes/tailwindcss#:~:text=then%20leave%20the%20options%20object%20empty. */
      options: {},
    },
  ],
  webpackFinal: async config => {
    // Find the Storybook Webpack rule relevant to SVG files.
    const imageRule = config.module.rules.find(rule => {
      if (rule.test && rule.test.test('.svg')) {
        console.log({ rule });
        return true;
      } else {
        return false;
      }
    });

    // Ignore what Storybook does
    imageRule.exclude = /\.svg$/;

    // Configure .svg files to be loaded with @svgr/webpack
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

export default config;
