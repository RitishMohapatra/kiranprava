module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Dark blue/slate (BetterCode header/footer)
        secondary: "#3b82f6", // Bright blue (BetterCode accents)
        tertiary: "#64748b", // Slate grey (BetterCode text)
        background: "#ffffff",
        surface: "#f8fafc", // Light grey background
        border: "#e2e8f0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      animation: {
        vote: "vote 1s ease-in-out",
      },
      keyframes: {
        vote: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-30deg)",
          },
          "75%": {
            transform: "rotate(30deg)",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
