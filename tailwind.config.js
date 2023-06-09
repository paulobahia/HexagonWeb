/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background:{
          primary:'#101022',
          secondary: '#1E1E35',
          light: '#262642'
        },
        itens: {
          primary:'#5E5BF4',
          light: '#6d6ae5'
        },
        success: {
          light: '#04D361',
          base: '#1B873F',
          low: '#051B0D',
        },
        danger: {
          light: '#F75A68',
          base: '#CC2937',
          low: '#2D090C',
        },
        warning: {
          light: '#FBA94C',
          base: '#EB8A1D',
          low: '#2E1B06',
        },
        new: {
          light: '#1EF7D0',
          base: '#07847E',
          low: '#163840',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#7C7C8A',
          500: '#505059',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
          950: '#09090A',
        },
      },
      screens: {
        'sm': '640px',
  
        'md': '768px',
  
        'lg': '1024px',

        '2lg': '1140px',

        'xl': '1280px',
  
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}
