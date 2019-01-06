const withCSS = require('@zeit/next-css');
<<<<<<< HEAD
const svgoConfig = require('./common/config/svgo');

module.exports = withCSS({
=======
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const svgoConfig = require('./common/config/svgo');

const nextConfig = withCSS({
  // NextCSS Config
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  cssModules: true,
  cssLoaderOptions: {
    // No need for importLoaders: 1 as its set to 1 when postcss.config.js exists
    localIdentName: '[name]_[local]__[hash:base64:5]',
  },
<<<<<<< HEAD
  webpack: (config, { isServer }) => {
=======

  // Bundle Analyzer Config
  analyzeServer: process.env.ANALYZE,
  analyzeBrowser: process.env.ANALYZE,
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'server',
      analyzerPort: 8888,
    },
    browser: {
      analyzerMode: 'server',
      analyzerPort: 8889,
    },
  },

  // Webpack Config
  webpack: config => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = { fs: 'empty' };

<<<<<<< HEAD
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'react-svg-loader',
          options: {
            svgo: svgoConfig,
          },
        },
      ],
    });

    if (process.env.ANALYZE === 1) {
      // eslint-disable-next-line global-require
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        }),
      );
    }

    return config;
  },
});
=======
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'react-svg-loader',
            options: {
              svgo: svgoConfig,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: {
                loader: 'file-loader',
                options: { publicPath: '/_next/static/images', outputPath: 'static/images' },
              },
              publicPath: '/_next/',
              outputPath: 'static/images/',
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      },
    );
    return config;
  },
});

module.exports = withBundleAnalyzer(nextConfig);
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
