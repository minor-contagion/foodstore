/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      lg: {max: "1444.99px"},
      md: {max: "1024.99px"},
      sm: {max: "399.99px"},
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sans: ["Public Sans", "sans-serif"],
        quicksand: ["Quiksand", "sans-serif"],
      },
      colors: {
        indigo: "#6C5FBC",
      }
    },
  },
  plugins: [],
}