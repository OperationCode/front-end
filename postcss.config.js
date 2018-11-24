/* eslint-disable global-require */
module.exports = ({ file, options, env }) => {
  const ENV = env.toLowerCase(); // eslint-disable-line no-unused-vars

  return {
    ...options,
    plugins: [require('postcss-import')({ root: file.dirname }), require('autoprefixer')()],
  };
};
