// @ts-check
const hasBundleAnalyzer = process.env.ANALYZE === 'true';
const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: hasBundleAnalyzer });
const svgoConfig = require('./common/config/svgo');

/**
 * @see https://nextjs.org/docs/basic-features/typescript#type-checking-nextconfigjs
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  images: {
    localPatterns: [{ pathname: '/**' }],
    remotePatterns: [
      { protocol: 'https', hostname: 'operation-code-assets.s3.us-east-2.amazonaws.com' },
      { protocol: 'https', hostname: 'user-images.githubusercontent.com' },
      { protocol: 'https', hostname: 'ssl-static.libsyn.com' },
      { protocol: 'https', hostname: 'static.libsyn.com' },
      { protocol: 'https', hostname: 'libsyn.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },

  /** @see https://nextjs.org/docs/api-reference/next.config.js/rewrites */
  async rewrites() {
    return [
      {
        source: '/media',
        destination: '/branding',
      },
      {
        source: '/privacy',
        destination: 'https://www.iubenda.com/privacy-policy/8174861',
      },
    ];
  },

  /** @see https://nextjs.org/docs/api-reference/next.config.js/redirects */
  async redirects() {
    return [
      {
        source: '/who_we_serve',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/swag',
        destination: 'https://operationcode.threadless.com/',
        permanent: true,
      },
      {
        source: '/store',
        destination: 'https://operationcode.threadless.com/',
        permanent: true,
      },
      {
        source: '/shop',
        destination: 'https://operationcode.threadless.com/',
        permanent: true,
      },
    ];
  },

  /** @see https://nextjs.org/docs/api-reference/next.config.js/headers */
  async headers() {
    return [
      {
        source: '/_next/static/([^/]+/pages|chunks|runtime|css|fonts)/(.+)',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=31536000',
          },
        ],
      },
      {
        source: '/(favicon.ico|robots.txt|manifest.json|humans.txt|sitemap.xml|sitemap.xsl)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withSentryConfig(withBundleAnalyzer(nextConfig), {
  silent: true,
});
