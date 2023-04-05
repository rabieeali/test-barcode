/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#333333",
        gray: "#686666",
        body: "#F2F3F5",
        green: "#24aeb1",
        blue: "#52ACF6",
        red: "#EC4141",
        yellow: "#F7B93E",
        pink: "#F55099",
      },
      fontSize: {
        "fs-12": "12px",
        "fs-14": "14px",
        "fs-16": "16px",
        "fs-18": "18px",
        "fs-20": "20px",
        "fs-32": "32px",
      },
      borderColor: {
        pale: '#e2e8f0'
      }
    },
  },
  plugins: [],
};
