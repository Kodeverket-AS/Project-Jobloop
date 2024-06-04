/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xs": "375px",
        xs: "425px",
      },
      colors: {
        kv: {
          black: "#0B1215",
          white: "#FFFAFA",
        },
        jobloop: {
          /* Jobloop hovedfarger */
          primary: {
            green: "#77C4B4",
            orange: "#F4A366",
            grey: "#575756",
          },
          /* V2 Kodehode nyanser */
          secondary: {
            orange: "#AF4831",
            green: "#01624E",
          },
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 35s linear infinite",
      },
    },
  },
  plugins: [],
};
