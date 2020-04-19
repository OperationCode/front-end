const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const withSourceMaps = require('@zeit/next-source-maps')();
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const svgoConfig = require('./common/config/svgo');

const { SENTRY_DSN, SENTRY_ORG, SENTRY_PROJECT } = process.env;

const nextConfig = withSourceMaps(
  withBundleAnalyzer({
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
    webpack: (config, { dev, isServer }) => {
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

      // In `pages/_app.js`, Sentry is imported from @sentry/node. While
      // @sentry/browser will run in a Node.js environment, @sentry/node will use
      // Node.js-only APIs to catch even more unhandled exceptions.
      //
      // This works well when Next.js is SSRing your page on a server with
      // Node.js, but it is not what we want when your client-side bundle is being
      // executed by a browser.
      //
      // Luckily, Next.js will call this webpack function twice, once for the
      // server and once for the client. Read more:
      // https://nextjs.org/docs#customizing-webpack-config
      //
      // So ask Webpack to replace @sentry/node imports with @sentry/browser when
      // building the browser's bundle
      if (!isServer) {
        // eslint-disable-next-line no-param-reassign
        config.resolve.alias['@sentry/node'] = '@sentry/browser';
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

      // Upload sourcemaps to Next.js per build.
      if (SENTRY_DSN && SENTRY_ORG && SENTRY_PROJECT) {
        config.plugins.push(
          new SentryWebpackPlugin({
            include: '.next',
            ignore: ['node_modules'],
            urlPrefix: '~/_next',
          }),
        );
      }

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
  }),
);

module.exports = nextConfig;
