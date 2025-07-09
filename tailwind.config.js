/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#3b82f6',
        'primary-default': '#2B4592',
        'primary-dark': '#1d4ed8',
        'secondary-light': '#fbbf24',
        'secondary-default': '#CC2229',
        'secondary-dark': '#d97706',
        'tertiary-light': '#f3f4f6',
        'tertiary-default': '#EAB818',
        'tertiary-dark': '#9ca3af',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        titulo: ['FontTitulo'],
      },
    },
  },
  plugins: [],
};

export default config;
