/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkNavy: "#0A192F",
        darkBlue: "#121214",
        gray300: "#CCD6F6",
        green500: "#CCF381",
        lightNavy: "#112240",
        opacityColor: "rgba(255, 255, 255, 0.5)",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.7s ease-out",
      },

      backgroundImage: {
        gridPattern: "url('../../public/icons/grid.webp.png')",
      },
      boxShadow: {
        "3xl": "-12px -12px 0 -4px rgba(204,243,129,0.7)",
      },

      fontFamily: {
        body: ["times new roman", "sans-serif"],
      },
    },
  },
  plugins: [],
};
