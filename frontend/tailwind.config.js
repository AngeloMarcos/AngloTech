module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0D1117',
          card: '#161B22',
          border: '#30363D',
          text: '#FFFFFF',
          subtext: '#8B949E',
        },
        light: {
          bg: '#FFFFFF',
          card: '#F3F4F6',
          border: '#D1D5DB',
          text: '#111827',
          subtext: '#6B7280',
        },
        primary: '#00C46F',
        secondary: '#3AE99F',
      },
    },
  },
  content: [ './src/**/*.{js,ts,jsx,tsx}' ],
}
