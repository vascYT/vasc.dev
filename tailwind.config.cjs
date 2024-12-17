import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      fira: ["Fira Mono", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      spacing: {
        "0.25pt": "0.25%",
        "0.5pt": "0.5%",
        "0.75pt": "0.75%",
        "1pt": "1%",
        "2pt": "2%",
        "3pt": "3%",
        "4pt": "4%",
        "5pt": "5%",
        "6pt": "6%",
        "7pt": "7%",
      },
      animation: {
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
