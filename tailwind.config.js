/** @type {import('tailwindcss').Config} */

const styles = require('./tw-config/typography');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    fontFamily: {
      sans: ['"National 2"', 'Arial', 'Helvetica', 'sans-serif'],
      sub: ['"National 2 Compressed"', 'Arial', 'Helvetica', 'sans-serif'],
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      currentColor: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      grey50: '#f3f3f3',
      grey100: '#e5e5e5',
      grey300: '#d1d1d1',
      grey500: '#767676',
      grey700: '#333333',
      grey900: '#000000',
      deepPurple: '#311b92',
      sky: '#003dff',
      teal: '#18ffff',
      pink: '#ff65e7',
      lime: '#c6ff00',
      green: '#0aa122',
      red: '#f30f0f',
    },

    fontSize: {
      't-xlg': ['36px', { ...styles.titleStyles, letterSpacing: '-0.36px' }],
      't-lg': ['24px', styles.titleStyles],
      't-md': ['20px', styles.titleStyles],
      't-sm': ['16px', styles.titleStyles],
      't-xs': ['14px', styles.titleStyles],
      'body-lg': ['24px', styles.bodyStyles],
      'body-md': ['20px', styles.bodyStyles],
      'body-sm': ['16px', styles.bodyStyles],
      'body-xs': ['14px', styles.bodyStyles],
      'btn-xs': ['12px', styles.titleStyles],
    },
    screens: {
      tabletUp: '400px',
      sm: '640px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '5kUp': '2400px',
    },
    extend: {
      borderRadius: {
        '4xl': '32px',
      },
      backgroundImage: {
        btnGradient: 'linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)',
      },
      spacing: {
        micro: 2,
        mini: 4,
        small: 8,
        md: 12,
        base: 16,
        normal: 20,
        large: 24,
        huge: 48,
        xl: 60,
        mega: 80,
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, config, addUtilities }) {
      const typography = {
        '.link-sm': {
          ...config('theme.fontSize["body-sm"]'),
          textDecoration: 'underline',
        },
        '.link-xs': {
          ...config('theme.fontSize["body-xs"]'),
          textDecoration: 'underline',
        },
        '.btn-sm': {
          ...styles.titleStyles,
          fontSize: '16px',
          textTransform: 'uppercase',
          fontFamily: '"National 2"',
        },
        '.btn-xs': {
          ...styles.titleStyles,
          fontSize: '12px',
          textTransform: 'uppercase',
          fontFamily: '"National 2"',
        },
        '.text-h-lg': {
          ...styles.headingStyles,
          fontSize: '80px',
          textTransform: 'uppercase',
          fontFamily: '"National 2 Compressed"',
        },
        '.text-h-md': {
          ...styles.headingStyles,
          fontSize: '40px',
          textTransform: 'uppercase',
          fontFamily: '"National 2 Compressed"',
        },
        '.text-h-sm': {
          ...styles.headingStyles,
          fontSize: '24px',
          lineHeight: '20px',
          textTransform: 'uppercase',
          fontFamily: '"National 2 Compressed"',
        },
        '.text-h-xs': {
          ...styles.headingStyles,
          fontSize: '18px',
          textTransform: 'uppercase',
          letterSpacing: '0.36px',
          fontFamily: '"National 2 Compressed"',
        },
        '.text-mb-lg': {
          ...styles.headingStyles,
          fontSize: '60px',
          textTransform: 'uppercase',
          fontFamily: '"National 2 Compressed"',
        },
      };
      addComponents(typography);
      addUtilities({
        '.no-bg': {
          backgroundColor: 'unset',
        },
        '.no-outline': {
          outline: 'none',
        },
      });
    }),
  ],
};
