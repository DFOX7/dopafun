/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 50px rgba(55, 48, 42, 0.10)',
      },
    },
  },
  plugins: [],
};
