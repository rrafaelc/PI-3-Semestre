// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h3: {
      color: '#001C39',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontWeight: 'semi-bold',
      fontSize: '2rem',
      color: '#223845',
    },
    body1: {
      fontSize: '1.5rem',
      color: '#24292F',
    },
  },
});

export default theme;
