'use strict'; // eslint-disable-line strict, lines-around-directive

const path = require('path');

// This is a custom Jest transformer turning file imports into filenames.
// http://facebook.github.io/jest/docs/en/webpack.html
module.exports = {
  process(source, filename) {
    const assetFilename = JSON.stringify(path.basename(filename));

    return `module.exports = ${assetFilename};`;
  },
};
