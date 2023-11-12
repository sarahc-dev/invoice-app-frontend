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
      dark: "#0C0E16",
      blue: {
        100: "#7c5dfa",
        200: "#9277ff",
        300: "#1e2139",
        400: "#252945",
        500: "#dfe3fa",
        600: "#888eb0",
        700: "#7e88c3",
        800: "#373b53",
        900: "#141625",
      },
      red: {
        300: "#ec5757",
        400: "#ff9797",
      },
      green: {
        400: "#33d69f",
      },
      orange: {
        400: "#ff8f00",
      },
    },
    fontSize: {
      sm: ["0.8125rem", "0.9375rem"],
      base: ["0.8125rem", "1.125rem"],
      md: ["0.9375rem", "0.9375rem"],
      lg: ["0.9375rem", "1.5rem"],
      xl: "1.5rem",
      "2xl": "2.25rem",
    },
    letterSpacing: {
      tightest: "-1.13px",
      tighter: "-0.75px",
      tight: "-0.25px",
      normal: "-0.1px",
    },
    extend: {
      borderRadius: {
        "2xl": "20px",
      },
      maxWidth: {
        base: "45.625rem", // 730px
      },
      spacing: {
        13: "3.25rem", // 52px
        15: "3.75rem", // 60px
        18: "4.5rem", // 72px
        25: "6.4375rem", // 103px
        26: "6.5rem", // 104px
      },
    },
  },
  plugins: [],
};
export default config;
