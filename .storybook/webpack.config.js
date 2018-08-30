const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    loaders: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]_[local]__[hash:base64:5]',
          sourceMap: true,
          sourceMapContents: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('postcss-import')({ root: path.join(__dirname, '../') }),
            require('postcss-export-custom-variables')({
              exporter: 'js',
              destination: 'common/styles/themeMap.js',
            }),
            require('autoprefixer')(),
          ],
        },
      },
    ],
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
                { removeAttrs: true, params: { /* exceptions */ attrs: 'fill-rule' } },
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

  // Return the altered config
  return storybookBaseConfig;
};
