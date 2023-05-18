/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#F1F6F9",
        neutral: "#9BA4B5",
        dark: "#394867",
        darker: "#212A3E",
      },
    },
  },
  plugins: [],
};
