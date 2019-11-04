const config = require('./jest.config');

const removeRootDirectory = pathArray => {
  return pathArray.map(path => path.slice(10));
};

module.exports = {
  include: [...removeRootDirectory(config.collectCoverageFrom), 'pages/**/*.js'],
  exclude: [...removeRootDirectory(config.coveragePathIgnorePatterns), 'pages/api/__coverage__.js'],
};
