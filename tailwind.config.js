/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%'
      },
      screens: {
        '991': '991px',
      },
    },
    container: {
      padding: {
        DEFAULT: '0',
        '991': '38px',
      },
      center: true,
      screens: {
        sm: '950px',
        md: '950px',
        lg: '1076px',
        xl: '1216px',
      },
    },
  },
  plugins: [],
}

