/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
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
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {};

      for (let i = 1; i <= 100; i++) {
        newUtilities[`.w-${i}-percent`] = {
          width: `${i}%`,
        };
      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

