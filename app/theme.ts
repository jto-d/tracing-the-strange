'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.75rem',
      fontWeight: 400,
    }
  },
  palette: {
    mode: 'dark',
    background : {
      default: '#0d0d0d',
      paper: '#1e1e1e',
    },

    text: {
      primary: '#ffffff',
    },

    divider: '#7e7e7e',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: 0,
        },
        html: {
          padding: 0,
        },
      },
    },
  },
});

export default theme;

