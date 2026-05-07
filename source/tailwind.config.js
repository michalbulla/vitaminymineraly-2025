const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./templates/**/*.twig'],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
      //   secondary: ['ui-sans-serif', 'sans-serif'],
    },
    screens: {
      sm: '450px',
      md: '768px',
      lg: '1024px',
      xl: '1100px',
      // We want the maximum container to stop at 1100px
      // so we set the last breakpoint to the same value
      '2xl': '1100px',
      // The original Tailwind 2xl breakpoint value
      // '2xl': '1536px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          // put the custom site color here
          'one': '#0A6108',
          'two': '#2B7E29',
          'three': '#2B7E29;',
        },
        content: {
          'text': '#666666',
          'link': '#4e93d8',
          'h2': '#0A6108',
          'h3': '#2B7E29',
          'h4': '#2B7E29',
          'divider': '#ccc',
          image: {
            'caption': colors.gray[600],
            'ring': colors.gray[300],
          },
          table: {
            'heading': '#ffffff',
            'heading-bg': '#0A6108',
            'border': '#9DC09C',
            'grid-row': '#9DC09C',
            'grid-column': '#9DC09C',
            'alt-row-bg': '#EEF4EE',
          },
          doc: {
            'size': colors.gray[700],
            'description': colors.gray[700],
            'card-bg': colors.white,
            'card-ring': colors.gray[300],
          },
        },
        social: {
          facebook: '#3c5a99',
          linkedin: '#0077b5',
          twitter: '#55acee',
          pinterest: '#cb2027',
        },
      },
      backgroundImage: {
        // 'callout-red': "url('/img/callout-graphic_red.svg'), linear-gradient(to right, #E7751F, #D33D4C)",
      },
      boxShadow: {
        // 'btn' : '2px 2px 0 rgba(0, 0, 0, .5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
