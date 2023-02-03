/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dotted-pattern": "url('/assets/dotted-pattern.svg')",
      },
    },
  },
  plugins: [],
};
