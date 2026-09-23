/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: { ink: '#111827', muted: '#667085', line: '#E9EDF3' },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #FF6B21 0%, #F12D72 52%, #A33BE8 100%)'
      },
      boxShadow: { card: '0 2px 8px rgba(17, 24, 39, 0.035)' }
    }
  },
  plugins: []
}
