/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hubba-oblique': "'Hubba'",
        'abang': "'Abang'",
        'zing': "'Zing'",
      }
    },
  },
  plugins: [],
}