const priorities = { '/': '1.00', '/join': '1.00' };

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.operationcode.org',
  generateIndexSitemap: false, // Simplification to make robots.txt "Sitemap" easier
  priority: 0.8,
  changefreq: 'weekly',
  // Modified default transform function
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform: async (config: any, path: any) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      priority: priorities[path as keyof typeof priorities] ?? config.priority,
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
