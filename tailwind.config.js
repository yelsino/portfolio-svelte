/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        color_blue1: '#19D2F1',
        color_pink1: "#F244C4",
        color_pink2: "#FFD3F3",
      },
      fontFamily: {
        'kodchasan': ['Kodchasan', 'sans serif'],
        'poppins': ['Poppins', 'sans serif'],
        'dm-sans': ['DM Sans', 'sans serif'],
    },
    },
  },
  plugins: [],
}

