const svgoConfig = require('../common/config/svgo');
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../components/**/__stories__/*.mdx',
    '../components/**/__stories__/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
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
    // @ts-expect-error => 'config.module' is possibly 'undefined'.ts(18048)
    const imageRule = config.module.rules.find(rule => {
      // @ts-expect-error => 'rule' is possibly 'null' or 'undefined'.ts(18049)
      if (rule.test && rule.test.test('.svg')) {
        console.log({ rule });
        return true;
      } else {
        return false;
      }
    });

    // Ignore what Storybook does
    // @ts-expect-error => 'imageRule' is possibly 'null' or 'undefined'.ts(18049)
    imageRule.exclude = /\.svg$/;

    // Configure .svg files to be loaded with @svgr/webpack
    // @ts-expect-error => 'config.module' is possibly 'undefined'.ts(18048)
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
