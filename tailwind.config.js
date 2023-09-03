/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'header': '76px',
        'button': '38px',
        'home-section': '455px'
      },
      width: {
        'header-button': '104px',
        'home-section-button': '213px'
      }
    },
  },
  plugins: [],
}

