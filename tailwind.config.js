/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7C4AA9",

          "secondary": "#FDE68A",

          "accent": "#4B5563",

          "neutral": "#F3F4F6",

          "base-100": "#ffffff",

          "info": "#9BABDD",

          "success": "#1BBB70",

          "warning": "#F59E0B",

          "error": "#FB7085",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
