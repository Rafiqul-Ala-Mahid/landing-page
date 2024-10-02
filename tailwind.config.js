/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cosmic: ['"Cosmic"', "sans-serif"], // Add your font name here
      },
    },
  },
  plugins: [],
};

