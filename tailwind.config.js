/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // to ignore require
  // eslint-disable-next-line
  plugins: [require("daisyui")],
}

