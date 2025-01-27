/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        momenta: {
          purple: '#7D6FF6',
          coral: '#FF906C',
          yellow: '#FFDC5D'
        }
      },
      fontFamily: {
        sans: ['Causten', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
};