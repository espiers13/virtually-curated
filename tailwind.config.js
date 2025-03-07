module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttoncolor: "#2d3754",
        textcolor1: "#ffffff",
        homepage: "#ffffff",
        pagebg: "#2d3754",
      },
      container: {
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          md: "30px",
          xl: "40px",
        },
        center: true,
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",
    },
  },
  plugins: [],
};
