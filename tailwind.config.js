/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    fontFamily: {
      sans: ['aktiv-grotesk', 'Helvetica Neue', 'sans-serif'],
      serif: ['le-monde-livre-std', 'serif'],
      system: ['system-ui', '-apple-system', 'sans-serif'],
    },
    extend: {
      colors: {
        'light': '#f2f2f2',
        'dark': '#121212',
      }
    },
  },
  plugins: [],
}
