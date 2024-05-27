/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          600: "#3EC878",
          700: "#21A056",
        },
        gray: {
          100: "#EAEAEA",
          800: "#464646",
          900: " #222",
        },
      },
    },
  },
  plugins: [],
};
