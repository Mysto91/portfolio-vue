/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,ts,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        text: '#0c0c0f',
        background: '#f4f4f6',
        primary: '#7b7998',
        secondary: '#bdb0c2',
        accent: '#ac94ad',
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
