const config = require('./jest.config');

const removeRootDirectoryFromPaths = pathArray => {
  return pathArray.map(path => path.replace('<rootDir>/', ''));
};

module.exports = {
  include: ['pages/**/*.js', ...removeRootDirectoryFromPaths(config.collectCoverageFrom)],
  exclude: ['pages/api/__coverage__.js'],
};
