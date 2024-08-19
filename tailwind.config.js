/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text: 'rgba(255,255,255, 0.8)',
        third: '#FFFFFF4D',
        second: '#FFFFFFCC',
        background: '#0a0a0a',
        primary: '#A3A3A3',
        secondary: 'rgba(38, 38, 38, 0.3)',
        accent: 'rgba(38, 38, 38, 1)',
        third: 'rgba(255, 255, 255, 0.25)',
        // primary: "#CCA9F4",
        // green: "#47DF00",
      },
      boxShadow: {
        ds: '1px 0.5px 10px rgba(255, 255, 255, 0.1)',
      },
      margin: {
        42: '10.5rem'
      }
    },
  },
  plugins: [],
};
