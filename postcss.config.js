/* eslint-disable global-require */
module.exports = ({ file, options, env }) => {
  const plugins = {
    'postcss-import': { root: file.dirname },
    autoprefixer:
      env === 'production'
        ? {
            ...options.autoprefixer,
            flexbox: 'no-2009',
          }
        : false,
  };

  return { plugins };
};
