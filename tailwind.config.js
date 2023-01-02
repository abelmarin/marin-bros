const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        brown: {
          light: "#a58c7a",
          DEFAULT: "#82592e",
          dark: "#573e27",
        },
      },
      backgroundImage: {
        homeHero: "url('/public/assets/overhead-costco-2.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
}
