/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      textPrimary: "#010851",
      textSecondary: "#454868",
      textThird: "rgb(255, 255, 255, 80%)",
      background: "#e5e5e5e5",
      backgroundSecondary: "#010851",
      light: "#515AFE",
      lightSecondary: "#ED80FD",
    },
  },
  plugins: [],
};
