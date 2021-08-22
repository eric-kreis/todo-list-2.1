import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import GlobalStyle from './styles/global';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.css';
import AuthProvider from './Contexts/AuthContext';

export default function App() {
  const theme = useSelector(({ changeTheme }) => changeTheme.theme);
  return (
    <div>
      <AuthProvider>
        <ThemeProvider theme={ theme }>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}
