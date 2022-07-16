/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./*.{html, js}"],
  theme: {
    screens: {
      'mobile': {'max': '730px'},
      'desktop': {'min': '730px'}
    },
    colors: {
      'lightest': '#FFF2F2',
      'light': '#FAD4D4',
      'dark': '#EF9F9F',
      'darkest': '#F47C7C'
    },
    extend: {}
  },
  plugins: [],
}
