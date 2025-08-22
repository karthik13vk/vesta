/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Mier B"'],
      },
     
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
