/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "serif"],
        'orbitron': ['Orbitron', "serif"]
      },
    },
  },
  plugins: [require('daisyui'),],
}