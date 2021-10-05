const pathAliases = require('./pathAliases');

module.exports = {
  env: {
    production: {
      presets: ['next/babel'],
      plugins: ['add-react-displayname'],
    },
    development: {
      presets: ['next/babel'],
      plugins: ['istanbul'],
    },
    test: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              modules: 'commonjs',
            },
          },
        ],
      ],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: pathAliases,
      },
    ],
    'macros',
  ],
};
