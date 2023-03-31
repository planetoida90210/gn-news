/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#151A1E",
        dark1: "#1E252B",
        light: "#d8dcdf",
        light1: "#F4F6F8",
      },
      fontFamily: {
        body: [' "Source Sans Pro" ', "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
