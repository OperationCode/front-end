const path = require('path');

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
        '@babel/preset-typescript',
      ],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@/': path.resolve('./'),
        },
      },
    ],
    'macros',
  ],
};
