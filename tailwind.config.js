const colors = require('tailwindcss/colors');
module.exports = {
  purge: [
    '*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      indigo: colors.indigo,
      yellow: colors.amber,
      green: colors.teal,
      red: colors.orange,
      teal: colors.teal,
      white: colors.white,
      primary: {
        50: '#D6DBE0',
        100: '#B6BEC8',
        200: '#95A0AF',
        300: '#748396',
        400: '#54667E',
        DEFAULT: '#334965',
        600: '#2E425B',
        700: '#293A51',
        800: '#243347',
        900: '#1F2C3D'
      },
      secondary: {
        50: '#E5EDF5',
        100: '#D0DFEE',
        200: '#BBD1E6',
        300: '#A7C3DE',
        400: '#92B5D7',
        DEFAULT: '#7DA7CF',
        600: '#7196BA',
        700: '#6486A6',
        800: '#587591',
        900: '#4B647C'
      },
      tertiary: {
        50: '#FAF8F0',
        100: '#F6F3E4',
        200: '#F3EDD8',
        300: '#EFE8CB',
        400: '#EBE2BF',
        DEFAULT: '#E7DDB3',
        600: '#D0C7A1',
        700: '#B9B18F',
        800: '#A29B7D',
        900: '#8B856B'
      },
      quad: {
        50: '#F6E5E4',
        100: '#EFD0CE',
        200: '#E8BBB8',
        300: '#E0A6A3',
        400: '#D9918D',
        DEFAULT: '#D27C77',
        600: '#BD706B',
        700: '#A8635F',
        800: '#935753',
        900: '#7E4A47'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
