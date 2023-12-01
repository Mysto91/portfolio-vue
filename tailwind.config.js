/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,ts,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        text: '#0d1716',
        background: '#f6fafa',
        primary: '#54ada7',
        secondary: '#95d2ce',
        accent: '#75cbc5',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      transitionDuration: {
        600: '600ms',
      },
    },
  },

  plugins: [],
};
