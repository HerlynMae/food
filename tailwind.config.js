/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        dark: "#09090b",
        light: "#f8fafc",
      },
    },
  },
  plugins: [],
};
