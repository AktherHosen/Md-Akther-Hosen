/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#172554",
        secondary: "#474E68",
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
