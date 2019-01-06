/* eslint-disable global-require */
module.exports = ({ file, options, env }) => {
<<<<<<< HEAD
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
=======
  const ENV = env.toLowerCase(); // eslint-disable-line no-unused-vars

  return {
    ...options,
    plugins: [require('postcss-import')({ root: file.dirname }), require('autoprefixer')()],
  };
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
};
