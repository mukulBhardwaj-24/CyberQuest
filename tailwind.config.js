/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "rgb(119 119 119)",
        customBlue: "var(--link-color)"
      }
    },
  },
  plugins: [],
}

