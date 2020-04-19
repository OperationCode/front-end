const path = require('path');
const fs = require('fs');

const blogArticlePath = 'blogArticles';

/**
 * @description Scans a folder for mdx file with given article name
 *
 * @exports
 * @param {articleName}
 * @param {blogArticlesFolder}
 * @returns {string} path of the blog article if found, else an empty string
 */

export function getArticlePath(articleName, blogArticlesFolder = blogArticlePath) {
  let articlePath = '';

  const scan = scanPath => {
    const filenames = fs.readdirSync(scanPath);

    filenames.sort((a, b) => {
      let sortValue = 0;
      if (a.endsWith('.mdx') && !b.endsWith('.mdx')) {
        sortValue = -1;
      } else if (!a.endsWith('.mdx') && b.endsWith('.mdx')) {
        sortValue = 1;
      }
      return sortValue;
    });

    // eslint-disable-next-line unicorn/no-for-loop, no-plusplus
    for (let i = 0; i < filenames.length; i++) {
      if (articlePath) {
        return;
      }
      const filename = filenames[i];
      const filePath = path.join(scanPath, filename);
      const st = fs.statSync(filePath);
      if (st.isFile() && filePath.endsWith(articleName)) {
        articlePath = filePath.replace(blogArticlePath, '');
      } else if (st.isDirectory()) {
        scan(filePath);
      }
    }
  };

  scan(blogArticlesFolder);
  return articlePath;
}
