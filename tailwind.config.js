module.exports = {
  purge: [],
  theme: {
    extend: {
      width: {
        '327px': '327px',
        '350px': '350px',
        '440px': '440px'
      },
      height: {
        'nav-mobile': 'calc(100vh - 41px)',
        'nav-desktop': 'calc(100vh - 64px)'
      },
      colors: {
        black: '#000',
        white: '#fff',
        gray: {
          100: '#f6f6f6',
          200: '#cccccc',
          300: '#9e9e9e',
          400: '#a6a6a6',
          500: '#a0aec0',
          600: '#757575',
          700: '#212121',
          800: '#191F2B',
          900: '#5E636B'
        },
        blue: {
          100: '#F3F8FC',
          200: '#2B95E6',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#117BCC',
          600: '#3182ce',
          700: '#000000',
          800: '#2c5282',
          900: '#0062B3'
        }
      },
      boxShadow: {
        2: '0px 1px 3px #999999;',
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled', 'visited']
  },
  plugins: [],
}
