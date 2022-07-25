module.exports = {
  // Keep in sync with `.storybook/webpack.config.js`
  plugins: [
    ['postcss-prepend-imports', { path: 'common/styles', files: ['media-queries.css'] }],
    'postcss-import',
    'autoprefixer',
    'postcss-custom-media',
    [
      'postcss-custom-properties',
      {
        importFrom: './common/styles/variables.css',
        preserve: false,
        disableDeprecationNotice: true,
      },
    ],
  ],
};
