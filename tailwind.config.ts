import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
      "2xl": "1440px",
      "3xl": "1700px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {},
        grey: {
          DEFAULT: "#EEEEEE",
          100: "#969BA5",
          200: "#55616D",
          700: "#616161",
        },
        black: {
          DEFAULT: "#000",
          100: "#0D1117",
          200: "#161B22",
          300: "#1F2428",
          400: "#242C38",
        },
        white: {
          DEFAULT: "#FFF",
          400: "#A3B3BC",
          500: "#A4B8D5",
          800: "#D0DFFF",
        },
        amber: {
          100: "#FFBF00",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#FFC107",
          600: "#FFB300",
        },
        yellow: {
          100: "#FFF9C4",
          200: "#FFF59D",
          300: "#FFD300",
          400: "#FFEE58",
          500: "#FFEB3B",
          600: "#FDD835",
        },
        orange: {
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FFA500",
          600: "#FB8C00",
        },
        purple: {
          100: "#E1BEE7",
          200: "#CE93D8",
          300: "#BA68C8",
          400: "#AB47BC",
          500: "#a46ede",
          600: "#8E24AA",
        },
        pink: {
          100: "#F8BBD0",
          200: "#F48FB1",
          300: "#F06292",
          400: "#EC407A",
          500: "#E91E63",
          600: "#D81B60",
        },
        transparent: "transparent",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
