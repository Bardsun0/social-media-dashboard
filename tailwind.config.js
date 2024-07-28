/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#590303",
          light: "#7a0404",
        },
        secondary: "#2ecc71",
        text: {
          dark: "#2c3e50",
          light: "#ecf0f1",
        },
        accent: "#e74c3c",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
        accent: ["Caveat", "cursive"],
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(135deg, #353698 0%, #c3cfe2 100%)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
