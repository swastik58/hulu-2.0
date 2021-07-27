module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Zen Tokyo Zoo': ['cursive'],
        'Otomanopee One': ['sans-serif'],
        'Dancing Script': ['cursive'],
        'Pirata One': ['cursive'],
        'Shadows Into Light': ['cursive'],
        'Caveat': ['cursive']
      },
      screens: {
        "3xl": "2000px"
      }
    },
  },
  variants: {
    extend: {},
    animation: ['group-hover']
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
