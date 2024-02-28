/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // body: ["Montserrat Alternates", "sans-serif"],
      body: ["Nunito", "sans-serif"],
    },
    fontWeight: {
      extraLight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extraBold: "800",
      black: "900",
    },
    fontSize: {
      xs: "0.7rem",
      sm: "0.85rem",
      base: "1rem",
      md: "1.15rem",
      xl: "1.3rem",
      "2xl": "1.45rem",
      "3xl": "1.6rem",
      "4xl": "1.75rem",
      "5xl": "1.9rem",
      "6xl": "2.05rem",
    },
    extend: {
      colors: {
        footerColor: "rgb(248, 247, 250)",
      },
    },
  },
  plugins: [],
};
