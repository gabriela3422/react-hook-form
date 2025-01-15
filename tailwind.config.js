/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%'
      }
    },
    container: {
      padding: '38px',
      center: true,
      screens: {
        sm: '650px',
        md: '950px',
        lg: '1076px',
        xl: '1216px',
      },
    },
  },
  plugins: [],
}

