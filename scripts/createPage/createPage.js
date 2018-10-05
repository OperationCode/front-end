/* eslint-disable */
const path = require('path');
const fs = require('fs');
const { buildJS } = require('./builder');

const pagePath = 'pages/';

const findRoot = () => {
  let thisPath = path.resolve(__dirname);
  while (!fs.existsSync(path.join(thisPath, 'package.json'))) {
    thisPath = path.join(thisPath, '..');
  }

  return thisPath;
};

const doesPageExist = (pageName, root) => {
  const newPath = path.join(root, pagePath, pageName);
  const filePrefix = '.js';

  if (fs.existsSync(newPath + filePrefix)) {
    console.log(`Page "${pageName}" Already Exists`);
    return true;
  }
  return false;
};

const createPage = (root, pageName) => {
  const pageAbsolutePath = `${path.join(root, pageName)}.js`;
  const pageData = buildJS(pageName);

  console.log(`Creating file: ${pageName}`);
  fs.writeFileSync(pageAbsolutePath, pageData);
  console.log(`File created: ${pageAbsolutePath}`);
};

(() => {
  const root = findRoot();

  process.argv
    .slice(2)
    .filter(pageName => doesPageExist(pageName, root) === false)
    .map(pageName => createPage(path.join(root, pagePath), pageName));
})();
