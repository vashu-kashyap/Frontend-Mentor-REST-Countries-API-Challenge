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
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue": "hsl(207, 26%, 17%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "light-mode-text": "hsl(200, 15%, 8%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
