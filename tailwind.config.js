/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1360px" },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        paper: { DEFAULT: "#F7F6F2", 2: "#EDEBE5", 3: "#E0DDD4", card: "#FFFFFF" },
        ink: { DEFAULT: "#141614", 2: "#464943", 3: "#7A7D75" },
        pine: { DEFAULT: "#1F5A43", soft: "#A9C3B5", deep: "#123A2B" },
        moss: { DEFAULT: "#5A6A3A", soft: "#A9B38C" },
        rule: "rgba(20, 22, 20, 0.12)",
        // shadcn primitives in components/ui
        border: "rgba(20, 22, 20, 0.12)",
        background: "#F7F6F2",
        foreground: "#141614",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      letterSpacing: { tightest: "-0.04em" },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
