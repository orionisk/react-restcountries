/** @type {import('tailwindcss').Config} */

const { withAnimations } = require('animated-tailwindcss');

module.exports = withAnimations({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true
      }
    },
    colors: {
      'light-1': '#fafafa',
      'light-2': '#858585',
      black: '#111517',
      'dark-1': '#202c37',
      'dark-2': '#2b3945',
      white: '#fff',
      purple: '#8f2bec',
      transparent: 'transparent'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  plugins: []
});
