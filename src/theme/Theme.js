import { createMuiTheme } from '@material-ui/core/styles';

export default {
  xs: 'min-width: 361px',
  s: 'min-width: 461px',
  m: 'min-width: 641px',
  l: 'min-width: 861px',
  xl: 'min-width: 1025px',
  xxl: 'min-width: 1441px',
  mainColorLight: '#d29f68',
  mainColorDark: '#d17e36',
  mainColorBlack: '#232220',
};

export const mainColorLight = '#d29f68';
export const mainColorDark = '#d17e36';
export const mainColorBlack = '#232220';

export const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#d29f68',
    },
    // secondary: {
    //   // main: green[500],
    // },
  },
});
