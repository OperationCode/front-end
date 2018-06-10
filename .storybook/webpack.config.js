// Export a function. Accept the base config as the only param.
// eslint-disable-next-line no-unused-vars
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]_[local]__[hash:base64:5]',
          sourceMap: true,
          sourceMapContents: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('postcss-import')({
              root: './',
            }),
            require('postcss-export-custom-variables')({
              destination: 'common/styles/themeMap.js',
            }),
          ],
        },
      },
    ],
  });

  if (configType === 'PRODUCTION') {
    storybookBaseConfig.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              require('autoprefixer')({
                ...options.autoprefixer,
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
      ],
    });
  }

  // Return the altered config
  return storybookBaseConfig;
};
