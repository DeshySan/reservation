/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      //frontface
      hDark: "#3C3D37",
      orang: "#FF9D3D",
      shadow: "#F8EDE3",
      white: "#fff",
    },
    fontFamily: {
      cursive: ["Dancing Script", "cursive"],
      sourGummy: ["Sour Gummy", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
