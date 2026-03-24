import type { IConfig } from 'next-sitemap';

// eslint-disable-next-line unicorn/no-zero-fractions
const priorities: Record<string, number> = { '/': 1.0, '/join': 1.0 };

const config: IConfig = {
  siteUrl: 'https://www.operationcode.org',
  generateIndexSitemap: false,
  priority: 0.8,
  changefreq: 'weekly',
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  exclude: [
    '/api/__coverage__',
    '/profile/change_password',
    '/profile',
    '/profile/update',
    '/thank_you',
    '/404',
    '/_app',
    '/_document',
    '/_error',
    '/join/form',
    '/join/success',
    '/confirm_email',
  ],
};

export default config;
