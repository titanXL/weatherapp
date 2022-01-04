module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-in": "slideIn .3s linear",
      },
      keyframes: {
        slideIn: {
          "0% ": { transform: "translateY(100%)" },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
