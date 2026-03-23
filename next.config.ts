import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';
import bundleAnalyzer from '@next/bundle-analyzer';
import { svgoConfig } from './src/common/config/svgo';

const hasBundleAnalyzer = process.env.ANALYZE === 'true';
const withBundleAnalyzer = bundleAnalyzer({ enabled: hasBundleAnalyzer });
const jsonSvgoConfig = JSON.parse(JSON.stringify(svgoConfig));

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: jsonSvgoConfig,
            },
          },
        ],
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
};

export default withSentryConfig(withBundleAnalyzer(nextConfig), {
  silent: true,
});
