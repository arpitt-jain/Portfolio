/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#faf7f3",
        surface: "#ffffff",
        textPrimary: "#111111",
        textSecondary: "rgba(17, 17, 17, 0.6)",
        borderLine: "rgba(17, 17, 17, 0.1)",
        accent: "#eb4d6d",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        archivo: ["var(--font-archivo)", "sans-serif"],
        clash: ["var(--font-clash)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
