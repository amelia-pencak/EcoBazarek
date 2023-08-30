/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oregano-green': '#46AA42',
        'bistre-brown': '#412F22',
      },
    },
  },
  plugins: [],
};