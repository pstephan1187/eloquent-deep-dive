import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

export default createTheme(
  {
    primary: 'white',
    secondary: '#ff2d20',
    tertiary: '#333333',
    quaternary: '#ff2d20',
    light: '#d8d8d8',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
    tertiary: 'JetBrains Mono'
  }
);
