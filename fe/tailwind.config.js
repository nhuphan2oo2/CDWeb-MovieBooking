/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#594545",
        secondary: "#815B5B",
        tertiary: "#9E7676",
        quaternary: "#FFF8EA",
      },
      animation: {
        "go-up": "go-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
