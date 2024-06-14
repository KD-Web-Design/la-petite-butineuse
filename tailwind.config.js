/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/pages/*.{html,js}', './build/index.html'],
  theme: {
    extend: {
      fontFamily: {
        Anta: ['Anta']
      },

        screens: {
          'tall': {
              'raw': `only screen and (max-height: 960px) and (max-width: 480px)`
          },
          'wide': {
              'raw': `only screen and (max-height: 480px) and (max-width: 960px)`
          },
          'portrait': {
              'raw': '(orientation: portrait)'
          },
          'landscape': {
              'raw': '(orientation: landscape)'
          }
        },
    }
  },
  plugins: [],
}

