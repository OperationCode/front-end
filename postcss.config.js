/* eslint-disable global-require */
module.exports = ({ file, options, env }) => {
  const postcssImport = require('postcss-import');
  const postcssCustomProperties = require('postcss-custom-properties');
  const autoPrefixer = require('autoprefixer');
  const postcssCustomMedia = require('postcss-custom-media');

  const ENV = env.toLowerCase(); // eslint-disable-line no-unused-vars
  const isProd = ENV === 'production';

  const plugins = [postcssImport({ root: file.dirname }), autoPrefixer(), postcssCustomMedia()];

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
