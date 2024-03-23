/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        headerSize: "0.8rem",
        modalHeaderSize: "13px",
      },
      colors: {
        primaryColor: "rgb(13 148 136 / 1)",
        fbLink: "#003468",
      },
    },
  },
  plugins: [],
};
