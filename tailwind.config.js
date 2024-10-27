/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], // Include your HTML file here
  theme: {
    extend: {
      colors: {
        'darkMode': '#0b0c10',
        'secondColor': '#1a1a2e'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
