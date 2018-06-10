module.exports = ({
  file, options, env,
}) => ({
  plugins: {
    autoprefixer:
      env === 'production'
        ? {
          ...options.autoprefixer,
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ],
          flexbox: 'no-2009',
        }
        : false,
    'postcss-import': {
      root: file.dirname,
    },
    'postcss-export-custom-variables': {
      destination: 'common/styles/themeMap.js',
    },
  },
});
