const postcssImport = require('postcss-import');
const postcssCustomProperties = require('postcss-custom-properties');
const autoPrefixer = require('autoprefixer');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = ({ options, env }) => {
  const isProd = env === 'production';

  const plugins = [postcssImport(), autoPrefixer(), postcssCustomMedia()];

  if (isProd) {
    plugins.push(
      postcssCustomProperties({
        importFrom: './common/styles/variables.css',
        preserve: false,
      }),
    );
  }

  return { ...options, plugins };
};
