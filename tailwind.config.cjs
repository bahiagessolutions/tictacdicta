// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#0071DC",
        "brand-blue-dark": "#0E2841",
        "brand-green": "#9BE815",
      },
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
        heading: ["Bricolage Grotesque Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};