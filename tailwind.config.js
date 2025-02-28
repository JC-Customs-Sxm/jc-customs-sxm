/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonGreen: "#39FF14", // Custom neon green color
      },
      fontFamily: {
        "skin-and-bones": ['"skin-and-bones"', "sans-serif"], // Custom font family
      },
      animation: {
        "fly-in": "flyIn 1s ease-out forwards", // Animation for sliding in
        gradient: "gradientBackground 15s ease infinite", // Gradient background animation
      },
      keyframes: {
        flyIn: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      screens: {
        xs: "360px", // Custom breakpoint for 360px screens
        sm: "640px", // Small screens (e.g., phones)
        md: "768px", // Medium screens (e.g., tablets)
        lg: "1024px", // Large screens (e.g., laptops)
        xl: "1280px", // Extra-large screens (e.g., desktops)
        "2xl": "1536px", // 2x extra-large screens
        "bp-400": "400px", // Custom breakpoint for 400px
        "bp-500": "500px", // Custom breakpoint for 500px
      },
    },
  },
  plugins: [],
};
