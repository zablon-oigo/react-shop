/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary:"#ebc7bc",
        secondary:"#f36437",
        light:"#f2f1ef",
        gray:"#74768f"
      },
      backgroundImage:{
        'furniture':"url('src/assets/images/gray-sofa.jpg')"
      }
    },
  },
  plugins: [],
}

