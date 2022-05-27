module.exports = {
  theme: {
    extend: {
      fontFamily: {
        kanit: ["kanit", "sans-serif"],
      },
    },
  },
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["halloween"],
  },
};
