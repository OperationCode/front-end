const priorities = { '/': '1.00', '/join': '1.00', '/code_schools': '1.00' };

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.operationcode.org',
  generateIndexSitemap: false, // Simplification to make robots.txt "Sitemap" easier
  priority: 0.8,
  changefreq: 'weekly',
  // Modified default transform function
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
