const fs = require('fs');
const path = require('path');

let sitemapConfig = { exclude: [], priority: {} };
/**
 * Read ignored sitemal links from .sitemapignore file
 *
 * .sitemapignore is a file which contains list of excluded sitemap paths.
 */
function readIgnoredSitemapLinks() {
  try {
    return JSON.parse(fs.readFileSync('scripts/SITEMAP_IGNORE.json', 'utf8'));
  } catch (error) {
    // SITEMAP_IGNORE.json file doesn't have appropriate data? no worries, accept all urls.
    return sitemapConfig;
  }
}

const fileObject = [];

const paginatedPageFileName = '[page]';

/**
 * Get and parse unauthenticated routes.
 * @param {} directory Directory path
 */
function readAndParseRoutes(directory) {
  const files = fs.readdirSync(directory);
  sitemapConfig = readIgnoredSitemapLinks();

  files.forEach(file => {
    const filePath = `${directory}${file}`;
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      readAndParseRoutes(`${filePath}/`);
    } else if (path.extname(file) === '.js') {
      let cleanFileName = filePath.substr(0, filePath.lastIndexOf('.')).replace('pages/', '');
      if (file === 'index.js') {
        /**
         * profile/index
         * password_reset/index etc. are not valid url.. So remove /index from them.
         */
        cleanFileName = cleanFileName.substr(0, cleanFileName.lastIndexOf('/index'));
      }

      const isPaginatedRoute = cleanFileName.endsWith(paginatedPageFileName);

      if (isPaginatedRoute) {
        const firstPage = cleanFileName.replace(paginatedPageFileName, 1);

        // Add this file to `fileObject`
        fileObject[`/${firstPage}`] = {
          page: `/${firstPage}`,
          lastModified: new Date(fileStat.mtime).toUTCString(),
        };

        return;
      }

      if (!sitemapConfig.exclude.includes(`/${cleanFileName}`)) {
        // Add this file to `fileObject`
        fileObject[`/${cleanFileName}`] = {
          page: `/${cleanFileName}`,
          lastModified: new Date(fileStat.mtime).toUTCString(),
        };
      }
    }
  });
}

/**
 * Generate sitemap based on parse routes we have in fileObject variable.
 */
function generateSitemap() {
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
  Object.keys(fileObject).map(routePath => {
    sitemapXml += `
      <url>
          <loc>https://www.operationcode.org${routePath}</loc>
          <lastmod>${fileObject[routePath].lastModified}</lastmod>
          <priority>${
            sitemapConfig.priority[routePath] ? sitemapConfig.priority[routePath] : '0.80'
          }</priority>
      </url>`;
    return routePath;
  });
  sitemapXml += '\n</urlset>';

  fs.writeFileSync('public/sitemap.xml', sitemapXml);
}

readAndParseRoutes('pages/');
generateSitemap();
