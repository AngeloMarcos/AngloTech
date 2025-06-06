// tailwind.config.js
module.exports = {
  darkMode: 'class',    // 👈 habilita tema via classe .dark
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // 🌑 DARK THEME
        dark: {
          bg:        '#0D1117',
          card:      '#161B22',
          border:    '#30363D',
          primary:   '#00C46F',
          secondary: '#3AE99F',
          hover:     '#00FFB3',
          text:      '#FFFFFF',
          subtext:   '#8B949E',
          warning:   '#FFB000',
          error:     '#EF4444',
        },
        // 🌞 LIGHT THEME
        light: {
          bg:        '#FFFFFF',
          card:      '#F3F4F6',
          border:    '#D1D5DB',
          primary:   '#00B57D',
          secondary: '#34D399',
          hover:     '#6EE7B7',
          text:      '#111827',
          subtext:   '#6B7280',
          warning:   '#FACC15',
          error:     '#EF4444',
        },
        // cores simplificadas
        primary:   '#00C46F',
        secondary: '#3AE99F',
      },
    },
  },
  plugins: [],
}
