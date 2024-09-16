/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01406D",
        secondary: "#01B4BA",
        accent: "#FF7A0F",
        background: "#F5FEFE",
        accentHover: "#018D96",
        accentText: "#33353A",
        bgDark: "#1A1F24",
        bgDarkest: "#060A0D",
        bgDarker: "#33353A",
      },
    },
  },
  plugins: [],
};
