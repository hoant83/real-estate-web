/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#156cd7",
        secondary: "#186AA5"
      },
      borderWidth: ['hover'],
    },
    screens: {
      xsm: '200px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
  },
    
  },
  plugins: [],
}
