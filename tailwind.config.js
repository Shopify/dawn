/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/**/*.liquid",
    "./templates/**/*.json"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}