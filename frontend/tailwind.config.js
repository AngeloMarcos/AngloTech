// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Azul-escuro puxando para roxo, usado como cor principal
        primary: '#312e81',    // equivalente a indigo-900
        // Roxo vibrante para botões e destaques
        secondary: '#8257E5',  // mantém o seu roxo atual
      },
    },
  },
  plugins: [],
};
