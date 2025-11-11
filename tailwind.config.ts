module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ecefff',
          300: '#aeb8ff',
          500: '#6366f1',
          700: '#4f46e5'
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          400: '#06b6d4'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
}
