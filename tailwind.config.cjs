/** @type {export('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#e3dfd3",
          secondary: "#ccb25e",
          tertiary: "#151030",
          "tan": "#ccc6b6",
          "navy": "#2c2e6b",
          "gold": "#ad9333",
        },
        boxShadow: {
          card: "0px 35px 120px -15px #211e35",
        },
        screens: {
          xs: "450px",
        },
        fontFamily:{
          serif: ['serif'],
        },
      },
    },
    plugins: [],
  };