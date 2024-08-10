/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      
        'sm': {
          'min' : '320px',
          'max' : '767px'
        },
        'md': {
          'min': '768px',
          'max': '1023px'
        },
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      
      '3xl': '1600px',
      '2k': '2500px',
    },

    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [],
};
