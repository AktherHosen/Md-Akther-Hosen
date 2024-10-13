/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#DC0155",
        secondary: "#474E68",
      },
      textColor: {
        primary: "#DC0155",
      },
      fontFamily: {
        primary: "'Mulish', sans-serif",
        title: "'Satisfy', cursive",
      },
    },
  },
  plugins: [],
};
