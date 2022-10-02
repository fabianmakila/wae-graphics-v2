const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#04c2ff',
        black: colors.black,
        white: colors.white,
        emerald: colors.emerald,
        sky: colors.sky,
        dark: 'rgb(31,33,42)',
        mid: 'rgb(43,46,56)',
        light: 'rgb(60,64,75)',
        lighter: 'rgb(79,83,94)'
      },
      extend: {},
    },
    plugins: [],
  }