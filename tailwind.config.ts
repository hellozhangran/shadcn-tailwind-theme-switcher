export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#FF0000',
        },
        red: {
          100: '#00FF00',
        },
      },
    },
  },
  plugins: [],
}