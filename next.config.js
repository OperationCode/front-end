const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    // No need for importLoaders: 1 as its set to 1 when postcss.config.js exists
    localIdentName: '[name]_[local]__[hash:base64:5]',
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = { fs: 'empty' };

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'react-svg-loader',
          options: {
            svgo: {
              plugins: [
                { cleanupIDs: true, params: { minify: true } },
                { cleanupListOfValues: true },
                { convertColors: true },
                { convertStyleToAttrs: true },
                { convertTransform: true },
                { mergePaths: true },
                { minifyStyles: true },
                { moveElemesAttrsToGroup: true },
                { removeAttrs: true, params: { attrs: 'fill-rule' } },
                { removeComments: true },
                { removeDesc: true, params: { removeAny: true } },
                { removeDimensions: true },
                { removeDoctype: true },
                { removeEditorsNSData: true },
                { removeEmptyAttrs: true },
                { removeEmptyContainers: true },
                { removeEmptyText: true },
                { removeNonInheritableGroupAttrs: true },
                { removeTitle: false },
                { removeUnknownsAndDefaults: true },
                { removeUnusedNS: true },
                { removeUselessDefs: true },
                { removeUselessStrokeAndFill: true },
                { removeXMLProcInst: true },
                { sortAttrs: true },
              ],
              floatPrecision: 3,
            },
          },
        },
      ],
    });

    return config;
  },
});
