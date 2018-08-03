/* eslint-disable global-require */
module.exports = ({ file, options, env }) => {
  // Keep in parity with ./storybook/webpack.config postcss-loader until
  // https://github.com/storybooks/storybook/issues/2455
  // is resolved

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
            browsers: ['> 1%', 'last 2 Chrome versions', 'not ie < 11'],
            flexbox: 'no-2009',
          }
        : false,
  };

  return { plugins };
};
