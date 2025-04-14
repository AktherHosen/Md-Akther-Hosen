/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        // primary: "#172554",
        primary: "#2C3335",
        secondary: "#2C3335",
      },
      textColor: {
        primary: "#172554",
      },
      fontFamily: {
        primary: "'Mulish', sans-serif",
        title: "'Satisfy', cursive",
        caratte: "'Carattere', handwriting",
      },
    },
  },
  plugins: [],
};
