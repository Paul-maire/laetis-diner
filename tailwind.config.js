module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FC967E',
        dark: '#3F414E',
        grey: "#F6F7FB",
      },
      boxShadow: {
        primary: '0px 4px 10px rgba(252, 150, 126, 0.4);'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
