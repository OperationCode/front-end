const fs = require('fs');
const path = require('path');

/**
 * Read ignored sitemal links from .sitemapignore file
 *
 * .sitemapignore is a file which contains list of excluded sitemap paths.
 */
function readIgnoredSitemapLinks() {
  try {
    return fs
      .readFileSync('.sitemapignore')
      .toString()
      .split('\r\n')
      .filter(ele => ele !== '');
  } catch (error) {
    // .sitemapignore doesn't exist? no worries.
    return [];
  }
}

const fileObject = [];

/**
 * Get and parse unauthenticated routes.
 * @param {} directory Directory path
 */
function readAndParseRoutes(directory) {
  const files = fs.readdirSync(directory);
  const excludedFileList = readIgnoredSitemapLinks();

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

      if (!excludedFileList.includes(`/${cleanFileName}`)) {
        // Add this file to `fileObject`
        fileObject[`/${cleanFileName}`] = {
          page: `/${cleanFileName}`,
          lastModified: fileStat.mtime,
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
          <priority>0.80</priority>
      </url>`;
    return routePath;
  });
  sitemapXml += '\n</urlset>';

  fs.writeFileSync('static/sitemap.xml', sitemapXml);
}

readAndParseRoutes('pages/');
generateSitemap();
