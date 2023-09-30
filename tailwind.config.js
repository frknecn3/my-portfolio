/** @type {import('tailwindcss').Config} */

module.exports = {
  important:true,
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://images.unsplash.com/photo-1502679726485-931beda67f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMHB1cnBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')",
      },
    },
  },
  plugins: [],
};