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
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        themePrimary: '#3ed6f0',
        themeSecondary: '#252e3e',
        themeGray200: '#121212',
        themeGray800: '#e2e2e2',
        burntOrange500: 'hsl(14, 55%, 45%, 1)',
        white: '#f7f7f7',
      },
      maxWidth: {
        girderWidth: '700px',
      },
      fontFamily: {
        dinCondensed: '"DIN Condensed Bold"',
        encodeSans: '"Encode Sans"',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
  important: '#__next',
};
