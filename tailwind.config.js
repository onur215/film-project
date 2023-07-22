/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', "sans-serif"],
        open: ['Open Sans', "sans-serif"],
      },
      boxShadow: {
        '3xl': 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
      },
      
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
}
