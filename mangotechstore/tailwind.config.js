/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'merc-blue': '#1FADAF',
        'tifosi-red': '#B40019',
        'redbull-blue': '#1C2A53',
        'mclaren-orange': '#F67600',
        'alpine-blue': '#1742B2',
        'alpha-tauri-white': '#FEFDFC',
        'aston-martin-green': '#01525E',
        'romeo-red': '#D11040',
      },
    },
  },
  plugins: [],
};
