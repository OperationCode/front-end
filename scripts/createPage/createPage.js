const path = require('path');
const fs = require('fs');

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
  if (fs.existsSync(newPath)) {
    console.log(`Page "${pageName}" Already Exists`);
    return true;
  }
  return false;
};

(() => {
  const root = findRoot();

  process.argv.slice(2).filter(pageName => doesPageExist(pageName, root) === false);
})();
