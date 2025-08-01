const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: 'var(--smallViewportWidth)',
      md: 'var(--mediumViewportWidth)',
      lg: 'var(--largeViewportWidth)',
      xl: 'var(--extraLargeViewportWidth)',
    },
    extend: {
      // TODO: Move colors into theme (not extension), kebab-case keys, use hsl, and update naming
      colors: {
        white: 'var(--white)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'burnt-orange': 'var(--burntOrange500)',
        'theme-gray-800': 'var(--gray)',
        error: 'var(--error)',
        'error-deep': 'var(--errorDeep)',
        success: 'var(--success)',
        'success-deep': 'var(--successDeep)',
        warning: 'var(--warning)',
        'warning-deep': 'var(--warningDeep)',
      },
      maxWidth: {
        girderWidth: '700px',
        'prose-sm': '50ch',
      },
      fontFamily: {
        'din-condensed': '"DIN Condensed Bold"',
        'encode-sans': '"Encode Sans"',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        { 'text-shadow': value => ({ textShadow: value }) },
        { values: theme('textShadow') },
      );
    }),
  ],
  important: '#__next',
};
