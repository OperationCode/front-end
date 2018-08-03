/* eslint-disable global-require */
module.exports = ({ file, options, env }) => {
  const plugins = {
    'postcss-import': { root: file.dirname },
    'postcss-export-custom-variables': {
      exporter: 'js',
      destination: './common/styles/themeMap.js',
    },
    autoprefixer:
      env === 'production'
        ? {
            ...options.autoprefixer,
            browsers: ['1%', 'last 2 Chrome versions', 'not ie < 11'],
            flexbox: 'no-2009',
          }
        : false,
  };

  return { ...{ plugins } };
};
