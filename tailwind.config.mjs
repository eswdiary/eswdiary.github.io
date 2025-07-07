import { DEFAULTS } from "node_modules/astro/dist/assets/fonts/constants";
import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "red": {
          100: "#f2d5d5",
          200: "#eebebe",
          300: "#ea9d9d",
          400: "#e77c7c",
          500: "#e55b5b",
          600: "#e23a3a",
          700: "#df1919",
          800: "#ea6962", // This is your original red
          900: "#d65d5d",
          DEFAULT: "#ea6962", // Default red color
        },
        "green": "#a9b665",
        "yellow": {
          100: "#fdf4c1",
          200: "#fceba1",
          300: "#fbe481",
          400: "#f9dc61",
          500: "#f8d441",
          600: "#f7cc21",
          700: "#f6c301",
          800: "#d8a657", // This is your original yellow
          900: "#b88b43",
          DEFAULT: "#d8a657", // Default yellow color
        },
        "blue": {
          100: "#b8e0d2",
          200: "#a0d1c3",
          300: "#88c2b4",
          400: "#70b3a5",
          500: "#58a493",
          600: "#409573",
          700: "#287663",
          800: "#1f5f53", // This is your original blue
          900: "#174f43",
          DEFAULT: "#1f5f53", // Default blue color
        },
        "purple": "#d3869b",
        "purple": {
          100: "#f2d5f5",
          200: "#eebeea",
          300: "#ea9de0",
          400: "#e77cd6",
          500: "#e55bdc",
          600: "#e23adf",
          700: "#df19e4",
          800: "#d3869b", // This is your original purple
          900: "#b16286",
          DEFAULT: "#d3869b", // Default purple color
        },
        "aqua": {
          100: "#d1f0e2",
          200: "#b8e6d4",
          300: "#9fdcc6",
          400: "#86d2b8",
          500: "#6dc8aa",
          600: "#54be9c",
          700: "#3bb48e",
          800: "#89b482", // This is your original aqua
          900: "#199a72",
          DEFAULT: "#89b482", // Default aqua color
        },
        "orange": {
          100: "#FFE5B4",
          200: "#FFD9A0",
          300: "#FFC88C",
          400: "#FFB978",
          500: "#FFA964",
          600: "#FF994F",
          700: "#FF883B",
          800: "#e78a4e", // This is your original orange
          900: "#d77c3a",
          DEFAULT: "#e78a4e", // Default orange color
        },
        "gray": "#a89984",
        "visual-red": "#442e2d",
        "visual-blue": "#2e3b3b",
        "visual-yellow": "#473c29",
        "visual-green": "#323c34",
      },
      fontFamily: {
        sans: ["Cantarell", "Noto Sans TC", "Geist Sans", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", "Geist Mono", ...defaultTheme.fontFamily.mono],
        heading: ["Noto Sans TC", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
