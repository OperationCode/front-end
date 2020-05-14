const withSourceMaps = require('@zeit/next-source-maps')();
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});
const svgoConfig = require('./common/config/svgo');

const nextConfig = withBundleAnalyzer({
  // For now.sh
  // see: https://zeit.co/guides/deploying-nextjs-with-now/
  target: 'serverless',

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
            loader: '@svgr/webpack',
            options: {
              svgoConfig,
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

module.exports = withSourceMaps(withMDX(nextConfig));
