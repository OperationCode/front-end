/* eslint-disable */
const path = require('path');
const fs = require('fs');

const replacementString = 'Component';
const componentPath = 'common/components';

const buildStoryJs = () => '';
const buildTestJs = () => '';
const buildCss = () => '';
const buildJS = () => '';

const componentStruct = {
  root: {
    common: {
      components: {
        Component: [
          {
            __stories__: [
              {
                'Component.stories.js': buildStoryJs,
              },
            ],
          },
          {
            __tests__: [
              {
                'Component.test.js': buildTestJs,
              },
            ],
          },
          {
            'Component.css': buildCss,
          },
          {
            'Component.js': buildJS,
          },
        ],
      },
    },
  },
};

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
// const isFunction = (functionToCheck) => {
//  return (functionToCheck instanceof Function);
// return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
// }

const isArray = objToCheck => Array.isArray(objToCheck);

function mkdirSyncRecursive(directory) {
  const newPath = directory.replace(/\\{1,2}/g, '/').split('/');

  for (let i = 1; i <= newPath.length; i++) {
    const segment = newPath.slice(0, i).join('/');
    segment.length > 0 && !fs.existsSync(segment) ? fs.mkdirSync(segment) : null;
  }
}

const ensureDirectoryExistence = filePath => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  // ensureDirectoryExistence(dirname);
  mkdirSyncRecursive(dirname);
};

const writeFileData = (fileData, fileName) => {
  console.log(`Creating file for new Component: ${fileName}`);
  ensureDirectoryExistence(fileName);

  fs.writeFileSync(fileName, fileData);
};

const findRoot = () => {
  let thisPath = path.resolve(__dirname);
  while (!fs.existsSync(path.join(thisPath, 'package.json'))) {
    thisPath = path.join(thisPath, '..');
  }
  return thisPath;
};

const doesComponentExist = (componentName, root) => {
  const newPath = path.join(root, componentPath, componentName);
  if (fs.existsSync(newPath)) {
    console.log(`Component "${componentName}" Already Exists`);
    return true;
  }
  return false;
};

const conditionallyAdjustPath = (key, currPath, componentName) => {
  let pathBase;
  if (key.indexOf(replacementString) === 0) {
    pathBase = key.replace(replacementString, componentName);
  } else {
    pathBase = key;
  }
  const newPath = path.join(currPath, pathBase);
  return newPath;
};

const recurseStructure = (subObject, currPath, componentName) => {
  let newPath;
  for (const key in subObject) {
    if (subObject.hasOwnProperty(key)) {
      newPath = conditionallyAdjustPath(key, currPath, componentName);
      // value is function - write output to currPath + key
      if (isFunction(subObject[key])) {
        const fileData = subObject[key](componentName);
        writeFileData(fileData, currPath, key);
        return;
      }
      // value is array - recurse each item
      if (isArray(subObject[key])) {
        subObject[key].forEach(arrayItem => {
          recurseStructure(arrayItem, currPath, componentName);
        });
        return;
      }
      // value is object - recurse object
      recurseStructure(subObject[key], currPath, componentName);
    }
  }
};

const traverseStructure = componentName => {
  const mainTree = componentStruct.root;
  const root = findRoot();
  // start at root,
  if (!doesComponentExist(componentName, root)) {
    recurseStructure(mainTree, root, componentName);
  }
};

process.argv.slice(2).forEach((val, index, array) => {
  traverseStructure(val);
});
