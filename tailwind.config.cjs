/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["synthwave"],
  },
  content: ["./index.html", "./src/**/*.{html,ts,md}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
