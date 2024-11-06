/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors:{

      },
      container:{
        padding: "24px",
        center: true,
        screens: {
          lg: "1189px",
        },
      }
    },
  },
  plugins: [],
}