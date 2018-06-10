module.exports = ({
  file, options, env,
}) => {
  /* eslint-disable global-require */
  const postCSSPlugins = [
    require('postcss-import')({
      root: file.dirname,
    }),
    require('postcss-export-custom-variables')({
      destination: 'common/styles/themeMap.js',
    }),
  ];

  if (env === 'production') {
    postCSSPlugins.push(require('autoprefixer')({
      ...options.autoprefixer,
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }));
  }

  return {
    plugins: postCSSPlugins,
  };
};
