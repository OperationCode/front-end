/* eslint-disable */
const path = require('path');
const fs = require('fs');

const replacementString = 'Component';
const componentPath = 'common/components';


/*
 *  Modify these strings to take the componentName string and build any values you need. 
 */
const buildStoryJs = (componentName) => 
  `import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import ${componentName} from '../${componentName}';

storiesOf('Common/${componentName}', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <${componentName}
      id={text('id', 'heading1')}
      has${componentName}Lines={boolean('has${componentName}Lines', true)}
      theme={select('theme', ['gray', 'slate', 'white'], 'gray')}
        >
        {text('children', '${componentName} Component')}
        </${componentName}>
    )),
  );
`;


const buildTestJs = (componentName) => 
` /* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

describe('${componentName}', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<${componentName}>Test</${componentName}>);
  });

   it('should render properly with all props assigned', () => {
    createSnapshotTest(
      <${componentName} className="test-class">
        Test
      </${componentName}>,
    );
  });
});
`




const buildCss = (componentName) => `.${componentName} { \n

}`;

const buildJS = (componentName) => {
  return `import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './${componentName}.css';

export default class ${componentName} extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.element]).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    return (
        <>
          {children}
        </>
    );
  }
}
`
};


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

const isFunction = (functionToCheck) => {
  return typeof functionToCheck === 'function';
 // return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

const isArray = objToCheck => Array.isArray(objToCheck);

const mkdirSyncRecursive = (directory) => {
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
        writeFileData(fileData, newPath, key);

        return;
      }

      // value is array - recurse each item
      if (isArray(subObject[key])) {

        subObject[key].forEach(arrayItem => {
          recurseStructure(arrayItem, newPath, componentName);
        });

        return;
      }

      // value is object - recurse object
      recurseStructure(subObject[key], newPath, componentName);
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
