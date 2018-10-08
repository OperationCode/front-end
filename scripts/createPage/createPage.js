/* eslint-disable */
const path = require('path');
const fs = require('fs');
const { buildJS } = require('./builders');
const {
  containsWhiteSpace,
  containsDashCharacter,
  capitalizeFirstLetter,
} = require('../../common/utils/node-utils');

const pagePath = 'pages/';
const fileNamePrefix = '.js';

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

const createPageTitle = pageName => {
  return pageName
    .split('_')
    .map(word => capitalizeFirstLetter(word))
    .join(' ');
};

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
};

(() => {
  const root = findRoot();

  process.argv
    .slice(2)
    .filter(pageName => doesPageExist(pageName, root) === false)
    .map(pageName => createPage(path.join(root, pagePath), pageName));
})();
