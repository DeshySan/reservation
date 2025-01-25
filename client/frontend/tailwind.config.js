/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0 10px 15px rgba(0, 0, 0, 0.1)", // Custom light shadow
        "custom-dark": "0 10px 25px rgba(0, 0, 0, 0.3)", // Custom dark shadow
      },
    },
    colors: {
      //frontface
      darkWhite: "#F7F9F2",
      tWhite: "#F5F7F8",
      hDark: "#3C3D37",
      orang: "#FF9D3D",
      shadow: "#F8EDE3",
      white: "#fff",
      pink: "#FF77B7",
      teal: "#48A6A7",
    },
    fontFamily: {
      cursive: ["Dancing Script", "cursive"],
      sourGummy: ["Sour Gummy", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
