module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FC967E',
          light: '#FFEFEC'
        },
        semantic: {
          pink: '#FF758B',
          orange: '#FFA26B',
          green: '#31C198',
          purple: '#6979F8',
        },
        neutral: {
          darker: '#1A051D',
          dark: '#3F3356',
          mid: '#D0C9D6',
          light: '#ECE9F1',
          lighter: '#F7F5F9',
          white: '#FFFFFF'
        },
        dark: '#3F414E',
        grey: "#F6F7FB",
      },
      boxShadow: {
        primary: '0px 4px 10px rgba(252, 150, 126, 0.4);'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      },
      minHeight: {
        area: '6rem'
      }
    },
    customForms: theme => ({
      default: {
        input: {
        '&:focus': {
          borderColor: undefined,
        },
      },
    }
  })
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
