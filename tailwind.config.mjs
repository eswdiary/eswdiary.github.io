import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "red": "#ea6962",
        "green": "#a9b665",
        "yellow": "#d8a657",
        "blue": "#7daea3",
        "purple": "#d3869b",
        "aqua": "#89b482",
        "orange": "#e78a4e",
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
