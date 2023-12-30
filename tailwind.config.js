/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      keyframes: {
        strike: {
          '0%' : { width: 0},
          '100%': { width: '100%'},
        },
      },
    },
  },
  plugins: [],
}

