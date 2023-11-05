/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 
  './dist/index.html'],
  theme: {
    extend: {
      colors: {
        custom: {
          // Define your custom color here
          orange: '#FF612F',
        },
      },
    },
  },
  plugins: [ require("daisyui")],
}

// require("@tailwindcss/typography"),