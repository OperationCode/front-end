module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-prepend-imports': {
      path: 'common/styles',
      files: ['media-queries.css'],
    },
    'postcss-import': {},
    'postcss-custom-media': {},
    'postcss-custom-properties': {
      importFrom: './common/styles/variables.css',
      preserve: false,
      disableDeprecationNotice: true,
    },
  },
};
