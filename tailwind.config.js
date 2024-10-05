/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'mui-dark': '#121212',
      'mui-red': '#f44336',
      'mui-grey': '#585858'
    },
    extend: {},
  },
  plugins: [],
}