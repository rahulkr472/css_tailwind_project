/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {

      fontFamily: {
        custom1: ['"Inter"', 'sans-serif'],
        custom2: ['"sarabun"','sans-serif']
      },

    

     keyframes: {
      slideLeft: {
        '100%': { transform: 'translate3d(-2327px, 0, 0)' },
      },
      slide: {
        '0%': {transform: 'translateY(0) rotate(-2deg)'},
        '100%':{transform: 'translateY(0) rotate(2deg)'},
      }
    },
    animation: {
      slideLeft: 'slideLeft 50s linear 0s infinite',
       slide: 'slide 2s ease-in-out infinite alternate'
    },
    
    },
  },
  plugins: [],
}

