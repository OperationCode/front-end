/* eslint-disable global-require */
module.exports = ({ file, options /* env is also available */ }) => {
  const plugins = {
    'postcss-import': { root: file.dirname },
    autoprefixer: {
      ...options.autoprefixer,
      flexbox: 'no-2009',
    },
  };

  return { plugins };
};
