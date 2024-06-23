// @ts-check
const hasBundleAnalyzer = process.env.ANALYZE === 'true';
const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: hasBundleAnalyzer });
const { s3hostName } = require('./common/constants/urls');
const svgoConfig = require('./common/config/svgo');

/**
 * @type {Partial<import('@sentry/nextjs/types/config/types').SentryWebpackPluginOptions>}
 */
const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

/**
 * @type {Partial<import('@sentry/nextjs/types/config/types').UserSentryOptions>}
 */
const sentryOptions = {
  hideSourceMaps: false,
};

/**
 * @see https://nextjs.org/docs/basic-features/typescript#type-checking-nextconfigjs
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: false,

  excludeDefaultMomentLocales: true,

  devIndicators: {
    buildActivityPosition: 'top-left',
  },

  eslint: {
    ignoreDuringBuilds: true, // We lint during CI.
  },

  images: {
    domains: [
      s3hostName,
      'user-images.githubusercontent.com',
      'ssl-static.libsyn.com',
      'static.libsyn.com',
      'libsyn.com',
      'i.ytimg.com',
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

/**
 * The name of the function type is `normalizeConfig` in `next/dist/server/config-shared`,
 * but JSDoc type imports can't read it.
 *
 * @type {(phase: string, config: import('next').NextConfig) => Promise<import('next').NextConfig>}
 */
module.exports = async (phase, defaultConfig) => {
  const plugins = [
    /**
     * @type {(config: import('next').NextConfig) => any}
     */
    config => withSentryConfig(config, sentryWebpackPluginOptions, sentryOptions),
    withBundleAnalyzer,
  ];

  const config = plugins.reduce(
    (acc, plugin) => {
      const update = plugin(acc);
      return typeof update === 'function' ? update(phase, defaultConfig) : update;
    },
    { ...nextConfig },
  );

  return config;
};
