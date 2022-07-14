/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'mobile': {'max': '448px'}
    },
    colors: {
      'lightest': '#FFF2F2',
      'light': '#FAD4D4',
      'dark': '#EF9F9F',
      'darkest': '#F47C7C'
    },
    extend: {}
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
