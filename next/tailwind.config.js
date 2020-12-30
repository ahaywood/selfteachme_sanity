const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/modules/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Nunito", "Helvetica", "Arial", "sans-serif"],
      serif: ["ff-tisa-web-pro", "serif"],
      condensed: ["alternate-gothic-no-1-d", "sans-serif"],
      modern: ["bodoni-urw", "serif"],
      handwriting: ["northwell", "sans-serif"],
      mono: ["ui-monospace", "monospace"],
    },
    extend: {
      backgroundSize: {
        'half': '50%'
      },
      backgroundImage: (theme) => ({
        believe: "url('/img/about__truly-believe.jpg')",
        checkbox: "url('/img/checkbox.svg')",
        callout: "url('/img/about__callout.jpg')",
        unchecked: "url('/img/unchecked.svg')",
        hero: "url('/img/bg__home.jpg')",
        hrShort: "url('/img/hr--short.png')",
        map: "url('/img/contact__google-map.jpg')",
        horizontalPluses: "url('/img/pluses--horizontal.svg')",
        underline: "url('/img/horizontal-line.svg')",
      }),
      borderWidth: {
        1: "1px",
      },
      colors: {
        almostWhite: "#efefef",
        bunting: "#161743",
        candyAppleRed: "#ee0e01",
        serenade: "#FFE3D4",
        baliHai: "#7F98AC",
        brightPink: "#F40082",
        gold: "#FFD200",
        pistachio: "#95CF00",
        java: "#26C9C3",
        sapphire: "#3452A5",
        black: "#000",
        white: "#fff",
        brightTurquoise: "#44FACD",
      },
      flex: {
        2: "2 2 0%",
        2.5: "2.5 2.5 0%",
        3: "3 3 0%",
      },
      gridColumnEnd: {
        "-1": "-1",
        "-2": "-2",
      },
      inset: {
        "-screen": "-100vh",
        15: "3.75rem",
        20: "5rem",
        24: "6rem",
        26: "6.5rem",
        28: "7rem",
      },
      lineHeight: {
        'stacked': ".75",
        'handwriting': "0.25",
        14: "3.5rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        24: "6rem",
      },
      maxWidth: {
        20: "5rem",
        48: "12rem",
        "2/3": "60%"
      },
      minHeight: {
        9: "2.25rem",

      },
      padding: {
        15: "3.75rem",
        18: "4.5rem",
      },
      spacing: {
        102: "25.5rem",
      },
      transitionProperty: {
        transform: "transform",
      },
      zIndex: {
        "-1": -1,
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover"],
      textDecoration: ["hover"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".blend-multiply": {
          "mix-blend-mode": "multiply",
        },
        ".blend-screen": {
          "mix-blend-mode": "screen",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
