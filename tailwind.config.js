/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        dark: "#191919",
        light: "#cbd5e1",
      },
    },
  },
  plugins: [],
};
