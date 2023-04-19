module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "input-color-lig": "#f1f5f9",
        "input-color-dark": "#b8babf",
        "bg-gray-primary": "#bbc6d3",
        "bg-dark-secondary": "#394352",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/data/fondo_a.png')",
        "fondo-b": "url('/src/data/fondo-b.png')",
        "fondo-a": "url('https://fondosmil.com/fondo/31314.jpg')",
       " banner": "url('/src/data/banner.png')",
      },
    },
  },
  plugins: [],
};
