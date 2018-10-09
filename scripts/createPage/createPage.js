/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
const { capitalizeFirstLetter } = require('../../common/utils/string-utils');
const { buildJS } = require('./builders');

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

  if (fs.existsSync(`${newPath}.js`)) {
    console.log(`Page "${pageName}" Already Exists`);
    return true;
  }

  return false;
};

const createPageTitle = pageName =>
  // Example 1: `some_page_name` becomes `Some Page Name`
  // Example 2: `page` becomes `Page`
  // Example 3: `_some_page_name` becomes `Some Page Name`
  pageName
    .split('_')
    .map(word => capitalizeFirstLetter(word))
    .join(' ')
    .trim();

const createPage = (root, pageName) => {
  // test to make sure file meets requirements
  const isNotValidPageName = pageName.includes('-') || pageName.includes(' ');

  if (isNotValidPageName) {
    console.log(`Page: ${pageName} wasn't created because of a dash or white space in name.`);
    return false;
  }

  const pageAbsolutePath = `${path.join(root, pageName)}.js`;
  const pageTitle = createPageTitle(pageName);
  const pageData = buildJS(pageTitle);

  console.log(`Creating file: ${pageName}`);

  // create file
  try {
    fs.writeFileSync(pageAbsolutePath, pageData);
  } catch (error) {
    console.log(error);
  }

  console.log(`File created: ${pageAbsolutePath}`);
  return true;
};

(() => {
  if (process.argv.length < 3) {
    console.error(
      'Error: You must provide at least one page name to script.',
      'Example: "yarn create-page pageName"',
    );

    return;
  }

  const root = findRoot();

  process.argv
    .slice(2)
    .filter(pageName => doesPageExist(pageName, root) === false)
    .map(pageName => createPage(path.join(root, pagePath), pageName));
})();
