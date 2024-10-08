/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',               
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily:
      {
        grobold:['GROBOLD','sans-serif'],
        roboto:['Robot','sans-serif'],
        domain:['Domain','serif']
      },
      colors:
      {
        ben10:'#a3e635'
      },
    },
  },
  plugins: [],
}
