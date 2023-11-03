import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      white: "#ffffff",
      light: "#f8f8f8",
      blue: {
        100: "#7c5dfa",
        200: "#9277ff",
        300: "#1e2139",
        400: "#252945",
        500: "#dfe3fa",
        600: "#888eb0",
        700: "#7e88c3",
        800: "#0c0e16",
        900: "#141625",
      },
      red: {
        200: "#ec5757",
        300: "#9277ff",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
