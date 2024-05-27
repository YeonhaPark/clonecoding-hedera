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
      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-reverse": {
          transform: "rotate(-360deg)",
        },
        pulsate: {
          "0%, 40%": {
            opacity: 1,
          },
          "60%, 100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        pulsate: "pulsate .5s linear infinite alternate",
        rotate: "rotate 240s linear infinite",
        "rotate-reverse": "rotate-reverse 220s linear infinite",
      },
      backgroundImage: () => ({
        "gradient-160": "linear-gradient(160deg, var(--tw-gradient-stops))",
        "gradient-24": "linear-gradient(24deg, var(--tw-gradient-stops))",
        noise: "url(/assets/home/noise-transparent.png)",
      }),
    },
  },
  plugins: [],
};
