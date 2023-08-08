/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    container: {
      center: true
    },
    extend: {
      backgroundImage: {
        'hero-background': "url('/src/assets/images/bg-building.jpg')",
        'icon-select': "url('/src/assets/icons/icon-chevron-down.svg')"
      },
      colors: {
        'blue-100': '#00537C',
        'blue-200': '#08385F',
        'blue-300': '#07477A',
        'blue-400': '#4097DB',
        'blue-500': '#14619D',
        'blue-600': '#53A7E9',
        'blue-700': '#029FE4',
        'blue-800': '#1BA0E1',
        'blue-900': '#509FDD',
        'gray-700': '#777777',
        'gray-800': '#747474',
        'whitesmoke-900': '#F8F8F8',
      },
    }
  },
  plugins: [],
}

