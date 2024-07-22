/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const typographyStyles = {
  headingStyles: {
    lineHeight: '80%',
    fontWeight: '700',
  },
  titleStyles: {
    lineHeight: 'normal',
    fontWeight: '500',
  },
  bodyStyles: {
    lineHeight: 'normal',
    fontWeight: '400',
  },
};

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
      't-xlg': ['36px', { ...typographyStyles.titleStyles, letterSpacing: '-0.36px' }],
      't-lg': ['24px', typographyStyles.titleStyles],
      't-md': ['20px', { ...typographyStyles.titleStyles, lineHeight: '22px' }],
      't-sm': ['16px', typographyStyles.titleStyles],
      't-xs': ['14px', { ...typographyStyles.titleStyles, lineHeight: '18px' }],
      'body-lg': ['24px', typographyStyles.bodyStyles],
      'body-md': ['20px', { ...typographyStyles.bodyStyles, lineHeight: '22px' }],
      'body-sm': ['16px', typographyStyles.bodyStyles],
      'body-xs': ['14px', { ...typographyStyles.bodyStyles, lineHeight: '18px' }],
      'btn-xs': ['12px', typographyStyles.titleStyles],
    },
    screens: {
      tabletUp: '400px',
      sm: '640px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
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
          fontSize: '16px',
          lineHeight: 'normal',
          fontWeight: '400',
          textDecoration: 'underline',
        },
        '.link-xs': {
          fontSize: '14px',
          lineHeight: 'normal',
          fontWeight: '400',
          textDecoration: 'underline',
        },
        '.btn-sm': {
          ...typographyStyles.titleStyles,
          fontSize: '16px',
          textTransform: 'uppercase',
          fontFamily: '"National 2"',
        },
        '.btn-xs': {
          ...typographyStyles.titleStyles,
          fontSize: '12px',
          textTransform: 'uppercase',
          fontFamily: '"National 2"',
        },
        '.text-h-lg': {
          ...typographyStyles.headingStyles,
          fontSize: '80px',
          textTransform: 'uppercase',
          fontFamily: '"National 2 Compressed"',
          letterSpacing: '3%',
        },
        '.text-h-md': {
          ...typographyStyles.headingStyles,
          fontSize: '40px',
          textTransform: 'uppercase',
          fontFamily: '"National 2 Compressed"',
          letterSpacing: '3%',
        },
        '.text-h-sm': {
          ...typographyStyles.headingStyles,
          fontSize: '24px',
          lineHeight: '20px',
          textTransform: 'uppercase',
          fontFamily: '"National 2 Compressed"',
          letterSpacing: '3%',
        },
        '.text-h-xs': {
          ...typographyStyles.headingStyles,
          fontSize: '18px',
          textTransform: 'uppercase',
          lineHeight: '80%',
          fontFamily: '"National 2 Compressed"',
          letterSpacing: '3%',
        },
        '.text-mb-lg': {
          ...typographyStyles.headingStyles,
          fontSize: '60px',
          textTransform: 'uppercase',
          fontFamily: '"National 2 Compressed"',
          letterSpacing: '3%',
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
