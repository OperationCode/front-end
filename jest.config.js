// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
/* eslint-disable max-len */
module.exports = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after the first failure
  // bail: false,

  // Respect "browser" field in package.json when resolving modules
  // browser: false,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "/var/folders/8y/bvd9gv354h5f76mmxkt_10q00000gp/T/jest_dy",

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/common/**/*.js',
    '<rootDir>/components/**/*.js',
    '<rootDir>/decorators/**/*.js',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/jest-coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/cypress',
    '<rootDir>/common/config',
    '<rootDir>/common/styles',
    '<rootDir>/common/constants',
    '<rootDir>/scripts',
    '<rootDir>/test-utils',

    // // No real logic to test here
    '<rootDir>/common/utils/api-utils.js',
    '<rootDir>/components/ZipRecruiterJobs/ZipRecruiterJobs.js',
    '<rootDir>/components/Press/PressLinks/Articles.js',
    '<rootDir>/components/Timeline/historyData.js',

    // // Don't collect coverage from import/export mappers
    '<rootDir>/common/(.*)/index.js',
    '<rootDir>/components/(.*)/index.js',
  ],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'lcov'],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: null,

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  /**
   * @see https://jestjs.io/docs/configuration#faketimers-object
   */
  fakeTimers: {
    enableGlobally: true,
  },

  // Force coverage collection from ignored files usin a array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: null,

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: null,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   "js",
  //   "json",
  //   "jsx",
  //   "node"
  // ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^.+\\.(jp?eg|png|gif|txt)$': '<rootDir>/test-utils/mocks/testFileMock.js',
    '^.+\\.svg$': '<rootDir>/test-utils/mocks/svgMock.js',
    '^.+\\.css$': 'identity-obj-proxy',
  },

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: "always",

  // A preset that is used as a base for Jest's configuration
  // preset: null,

  // Run tests from one or more projects
  // projects: null,

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state between every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: null,

  // Automatically restore mock state between every test
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: null,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>/"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['jest-prop-type-error', './test-utils/jest-next-image.js'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // eslint-disable-line unicorn/prevent-abbreviations

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: ['enzyme-to-json/serializer'],

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',

  // Options that will be passed to the testEnvironment
  testEnvironmentOptions: {
    url: 'https://localhost',
  },

  // Adds a location field to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>/**/*.test.js'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // The regexp pattern Jest uses to detect test files
  // testRegex: "",

  // This option allows the use of a custom results processor
  // testResultsProcessor: null,

  // This option allows use of a custom test runner
  // testRunner: "jasmine2",

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^(?!.*\\.(js|css|json)$)': '<rootDir>/test-utils/transforms/file.js',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: false,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};
