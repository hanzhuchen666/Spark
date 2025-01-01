import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import InnoMarket from './pages/InnoMarket';
import ProductSpecsPage from './pages/ProductSpecsPage';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#008080',
      light: '#00a3a3',
      dark: '#006666',
    },
    secondary: {
      main: '#ff5722',
      light: '#ff784e',
      dark: '#c41c00',
    },
    background: {
      default: '#f5f5f7',
      paper: '#ffffff',
    },
    text: {
      primary: '#2d3436',
      secondary: '#636e72',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#008080',
          '&:hover': {
            backgroundColor: '#006666',
          },
        },
        outlined: {
          borderColor: '#008080',
          color: '#008080',
          '&:hover': {
            borderColor: '#006666',
            backgroundColor: 'rgba(0, 128, 128, 0.05)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#e8f5f5',
          color: '#008080',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topic/:topicId" element={<DetailPage />} />
          <Route path="/innomarket" element={<InnoMarket />} />
          <Route path="/product/:id" element={<ProductSpecsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
