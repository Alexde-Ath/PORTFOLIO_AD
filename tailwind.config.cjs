/** @type {export('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#edb8b4",
          secondary: "#ccb25e",
          tertiary: "#151030",
          "tan": "#ccc6b6",
          "navy": "#2c2e6b",
          "gold": "#ad9333",
          "dpink": "#522325",
        },
        boxShadow: {
          card: "0px 35px 120px -15px #211e35",
        },
        screens: {
          xs: "450px",
        },
        backdropFilter: {
          "none": "none",
          "blur": "blur(10px)",
        },
      },
    },
    plugins: [],
  };