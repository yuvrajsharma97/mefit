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
        glassLight: "rgba(255, 122, 15, 0.1);", // Glass background color
        glassBorder: "rgba(255, 255, 255, 0.2)", // Border for glass effect
      },
      backdropBlur: {
        lg: "12px", // Blur amount for glassmorphism
      },
    },
  },
  plugins: [],
};
