import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        primary: ["var(--font-bellefair)"],
        secondary: ["var(--font-jost)"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "matt-blue": "#1E90FF",
      },
      maxWidth: {
        content: "1440px",
      },
      spacing: {
        195: "780px",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "ease-in-out",
          },
        },
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
        scale: "scale 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@xpd/tailwind-3dtransforms"),
  ],
};
