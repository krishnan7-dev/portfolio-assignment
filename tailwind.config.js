/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ['./src/**/*.js', './public/index.html'],
  content: ["./index.html"],
  theme: {
    screens: {
      'mobile': {'max': '448px'},
      'desktop': {'min': '448px'}
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
