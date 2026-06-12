/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ink: {
          50: "#f5f7fa",
          100: "#e4e8ef",
          200: "#cbd3df",
          300: "#9fa9bc",
          400: "#6c7892",
          500: "#4a5573",
          600: "#2f3857",
          700: "#1f2745",
          800: "#131a33",
          900: "#0a0f22",
          950: "#050816",
        },
        neon: {
          50: "#eafff6",
          100: "#c9ffe8",
          200: "#97ffd4",
          300: "#5dffbd",
          400: "#2ef5a3",
          500: "#00d98a",
          600: "#00a870",
          700: "#007d57",
          800: "#005c43",
          900: "#003f2e",
        },
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 50% 0%, rgba(46,245,163,0.08), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(46,245,163,0.25)",
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out both",
        "slide-up": "slide-up 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
