const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    // importLoaders is set to 1 when postcss.config.js exists
    modules: true,
    localIdentName: '[name]_[local]__[hash:base64:5]',
    sourceMap: true,
    sourceMapContents: true,
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = { fs: 'empty' };

    return config;
  },
});
