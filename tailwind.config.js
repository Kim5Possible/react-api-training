/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "340px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
