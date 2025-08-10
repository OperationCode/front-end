import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';
import type { PluginUtils } from 'tailwindcss/types/config';

const hslWithOpacity: PluginUtils['hsl'] = (value: string) => {
  return ({ opacityValue }): string => {
    // when using bare tw class name like `text-success` we add 0.6 opacity
    if (opacityValue?.toString()?.includes('tw')) return `hsl(${value} / 0.6)`;
    return `hsl(${value} / ${opacityValue})`;
  };
};

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'rgb(var(--white-rgb) / <alpha-value>)',
        primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-rgb)/ <alpha-value>)',
        'burnt-orange': 'hsl(var(--burnt-orange-hsl) / <alpha-value>)',
        'theme-gray-800': 'rgb(var(--gray-rgb) / <alpha-value>)',
        error: hslWithOpacity('var(--error-hsl)') as unknown as string,
        'error-deep': 'hsl(var(--error-deep-hsl) / <alpha-value>)',
        success: hslWithOpacity('var(--success-hsl)') as unknown as string,
        'success-deep': 'hsl(var(--success-deep-hsl) / <alpha-value>)',
        warning: hslWithOpacity('var(--warning-hsl)') as unknown as string,
        'warning-deep': 'hsl(var(--warning-deep-hsl) / <alpha-value>)',
      },
      maxWidth: {
        girderWidth: '700px',
        'prose-sm': '50ch',
      },
      fontFamily: {
        'din-condensed': '"DIN Condensed Bold"',
        'encode-sans': '"Encode Sans"',
      },
      boxShadow: {
        xs: '0 0 1px 1px var(--tw-shadow-color)',
      },
      boxShadowColor: {
        // tw has shadow-primary bug with var(--primary-rgb) so putting fix here for now
        primary: 'rgb(62 214 240 / <alpha-value>)',
        secondary: 'rgb(37 46 62 / <alpha-value>)',
        'theme-gray-800': 'rgb(226 226 266 / <alpha-value>)',
        white: 'rgb(247 247 247 / <alpha-value>)',
        success: hslWithOpacity('132 35% 88%') as unknown as string,
        'success-deep': 'hsl(132 60% 23% / <alpha-value>)',
        error: hslWithOpacity('355 70% 91%') as unknown as string,
        'error-deep': 'hsl(355 63% 34% / <alpha-value>)',
        warning: hslWithOpacity('46 100% 90%') as unknown as string,
        'warning-deep': 'hsl(39 80% 31% / <alpha-value>)',
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
} satisfies Config;
