/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xs: "475px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    fontFamily: {
      "karla": "karla"
    },
    container: {
      center: true,
    },
    boxShadow: {
      DEFAULT: "0px 0px 20px 0px #00000012"
    },
    extend: {
      colors: {
        "primary": {
          DEFAULT: "hsl(179, 62%, 43%)",
          500: "hsl(179, 47%, 52%)",
          yellow: "hsl(71, 73%, 54%)"
        },
        "neutral": {
          DEFAULT: "hsl(204, 43%, 93%)",
          grayish_blue: "hsl(218, 22%, 67%)"
        }
      }
    },
  },
  plugins: [],
}

