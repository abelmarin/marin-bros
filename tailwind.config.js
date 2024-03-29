module.exports = {
  mode: "jit",
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
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
      boxShadow: {
        header: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      },
      backgroundImage: {
        homeHero: "url(public/assets/overhead-costco-2.webp)",
      },
    },
  },
  variants: {
    extend: {},
  },
}
