module.exports = {
  all: true,
  include: [
    'pages/**/*.{js,ts,tsx}',
    'common/**/*.{js,ts,tsx}',
    'components/**/*.{js,ts,tsx}',
    'decorators/**/*.{js,ts,tsx}',
  ],
  exclude: [
    'pages/api/__coverage__.{js,ts}',
    '**/*.config.ts',
    '**/*.config.js',
    '**/*.d.ts',
    '**/pages/api/**/*.*',
    '__tests__',
    'tests',
  ],
  reporter: ['html'],
};
