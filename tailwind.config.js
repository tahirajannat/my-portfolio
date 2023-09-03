/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'accent': '#1C2E50',
        'primary': '#136C47',
        'secondary': '#9FC5C8',

      },
      fontFamily: {
        primary: ["Aclonica", "sans-serif"],
        primary: ["Assistant", "sans-serif"],
      },
    },
  },
  plugins: [],
};
