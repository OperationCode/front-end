const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps')();
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const svgoConfig = require('./common/config/svgo');

const nextConfig = withCSS({
  // For now.sh
  // see: https://zeit.co/guides/deploying-nextjs-with-now/
  target: 'serverless',

  // NextCSS Config
  cssModules: true,
  cssLoaderOptions: {
    // No need for importLoaders: 1 as its set to 1 when postcss.config.js exists
    localIdentName: '[name]_[local]__[hash:base64:5]',
  },

  // Bundle Analyzer Config (only used when running `yarn build:analyze`)
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

  // eslint-disable-next-line unicorn/prevent-abbreviations
  webpack: (config, { dev }) => {
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = { fs: 'empty' };

    if (dev) {
      // eslint-disable-next-line global-require
      const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

      // Filters Mini CSS Extract Plugin bug
      // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250#issuecomment-415345126
      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        }),
      );
    }

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
                options: {
                  publicPath: '/_next/static/images',
                  outputPath: 'static/images',
                },
              },
              publicPath: '/_next/',
              outputPath: 'static/images/',
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      },
    );

    // Add polyfills
    const originalEntry = config.entry;

    // eslint-disable-next-line no-param-reassign
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
        entries['main.js'].unshift('./polyfills.js');
      }

      return entries;
    };

    return config;
  },
});

module.exports = withSourceMaps(withBundleAnalyzer(nextConfig));
