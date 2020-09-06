const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});
const svgoConfig = require('./common/config/svgo');

const nextConfig = withBundleAnalyzer({
  // For Vercel
  // see: https://vercel.com/guides/deploying-nextjs-with-vercel
  target: 'serverless',

  experimental: {
    productionBrowserSourceMaps: true,
    scrollRestoration: true,
  },

  // eslint-disable-next-line unicorn/prevent-abbreviations
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = { fs: 'empty' };

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

module.exports = withMDX(nextConfig);
