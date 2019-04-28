const autoPrefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssPrependImports = require('postcss-prepend-imports');

// eslint-disable-next-line unicorn/prevent-abbreviations
module.exports = ({ options, env }) => {
  const isProduction = env === 'production';

  const plugins = [
    postcssPrependImports({
      path: 'common/styles',
      files: ['media-queries.css'],
    }),
    postcssImport(),
    autoPrefixer(),
    postcssCustomMedia(),
  ];

  if (isProduction) {
    plugins.push(
      postcssCustomProperties({
        importFrom: './common/styles/variables.css',
        preserve: false,
      }),
    );
  }

  return { ...options, plugins };
};
