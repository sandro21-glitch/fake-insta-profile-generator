/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        headerSize: "0.8rem",
        modalHeaderSize: "13px",
      },
    },
  },
  plugins: [],
};
