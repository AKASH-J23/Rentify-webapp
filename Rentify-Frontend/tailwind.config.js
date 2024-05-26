/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        col1: {
          50: '#f7f8f8',
          100: '#eeeef0',
          200: '#d9dade',
          300: '#b7b9c2',
          400: '#9093a0',
          500: '#737784',
          600: '#5c5f6d',
          700: '#4c4e58',
          800: '#41434b',
          900: '#323339',
          950: '#26272b',
      },
      col2: {
        50: '#fdf5fe',
        100: '#faebfc',
        200: '#f4d6f8',
        300: '#eeb6f1',
        400: '#e48ae8',
        500: '#d35dd8',
        600: '#c24ac4',
        700: '#9b309a',
        800: '#7f297d',
        900: '#692667',
        950: '#440e42',
    },
      }
    },
  },
  plugins: [],
}

