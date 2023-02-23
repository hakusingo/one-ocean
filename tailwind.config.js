/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/templates/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#1EA4D9',
        'light-blue': '#D8F7FF',
        'main-green': '#7EBF41',
        'yellow': '#FFEF00',
        'light-yellow': '#FEFCE6',
        'pink': '#E74492',
        'navy': '#1E2971',
        'text-black': '#262626',
        'light-gray': '#F9FAFB',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
  important: true,
}
