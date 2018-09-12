/* eslint-disable */
const path = require('path');
const fs = require('fs');
const { buildJS, buildCss, buildStoryJs, buildTestJs } = require('./builders');

const replacementString = 'Component';
const componentPath = 'common/components';

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

/*
 *   Finds the project main directory with the `package.json` file
 *   1. Start at the directory you run the script
 *   2. Continually `cd ..` to see if `package.json` is there
 *
 *   Question: do we need to check for skipping the folder?
 *   --> package.json has to be found for a yarn script to run
 *   --> if no package.json then we'll get some other error prior to running script
 */
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

/*
 *  Split path into segments, and incrementally mkdir until we have built the full path
 *     -> this could be done with `mkdir -p` if we had some other cross platform node package.
 */

const mkdirSyncRecursive = directory => {
  // adjust windows path delim to match bash.
  const newPath = directory.replace(/\\{1,2}/g, '/').split('/');

  newPath.reduce((accumPath, nextPath) => {
    let incrementalPath = accumPath + '/' + nextPath;

    incrementalPath.length > 0 && !fs.existsSync(incrementalPath)
      ? fs.mkdirSync(incrementalPath)
      : null;
    return incrementalPath;
  });
};

// Only call recursive create if the folder doesn't yet exist
const ensureDirectoryExistence = filePath => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  // ensureDirectoryExistence(dirname);
  mkdirSyncRecursive(dirname);
};

const writeFileData = (fileData, fileName) => {
  console.log(`Creating file: ${fileName}`);

  ensureDirectoryExistence(fileName);
  fs.writeFileSync(fileName, fileData);
};

// Changes path when the configuration tree needs to be modified to respect user input.
const conditionallyAdjustPath = (key, currPath, componentName) => {
  let pathBase;
  if (key.indexOf(replacementString) === 0) {
    pathBase = key.replace(replacementString, componentName);
  } else {
    pathBase = key;
  }

  // Adjusted path
  return path.join(currPath, pathBase);
};

// Interacts with the configuration tree based on what it finds in each object.
const recurseStructure = (subObject, currPath, componentName) => {
  let newPath;
  for (const key in subObject) {
    if (subObject.hasOwnProperty(key)) {
      newPath = conditionallyAdjustPath(key, currPath, componentName);

      // Recursive base case - write file data when a function is found
      if (typeof subObject[key] === 'function') {
        const fileData = subObject[key](componentName);
        writeFileData(fileData, newPath, key);

        return;
      }

      // Recurse over arrays or objects within file/folder structure
      if (Array.isArray(subObject[key])) {
        subObject[key].forEach(arrayItem => {
          recurseStructure(arrayItem, newPath, componentName);
        });

        return;
      }

      recurseStructure(subObject[key], newPath, componentName);
    }
  }
};

// Function runner
(() => {
  const mainTree = componentStruct.root;
  const root = findRoot();

  process.argv
    .slice(2)
    .filter(componentName => {
      return doesComponentExist(componentName, root) === false;
    })
    .map(componentName => {
      return recurseStructure(mainTree, root, componentName);
    });
})();
