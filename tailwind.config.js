/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        card: "hsl(213, 19%, 18%)",
        primary: "hsl(216, 12%, 8%)",
        secondary: "hsl(25, 97%, 53%)",
        circle: "hsl(217, 12%, 63%)",
        white: " hsl(0, 0%, 100%)",
        p_color: "hsl(216, 12%, 54%)",
      },
    },
  },
  plugins: [],
};
