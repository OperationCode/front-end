const fs = require('fs');
const path = require('path');

const fileObject = {};
const walkSync = directory => {
  const files = fs.readdirSync(directory);
  files.forEach(file => {
    const filePath = `${directory}${file}`;
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      walkSync(`${filePath}/`);
    } else {
      const extension = path.extname(file);
      if (extension === '.js') {
        const cleanFileName = filePath.substr(0, filePath.lastIndexOf('.')).replace('pages/', '');

        // Add this file to `fileObject`
        fileObject[`/${cleanFileName}`] = {
          page: `/${cleanFileName}`,
          lastModified: fileStat.mtime,
        };
      }
    }
  });
};

walkSync('pages/');

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

fs.writeFileSync('static/sitemap_test.xml', sitemapXml);
