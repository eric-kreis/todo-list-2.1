import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import GlobalStyle from './styles/global';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  const theme = useSelector(({ changeTheme }) => changeTheme.theme);
  return (
    <div>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </div>
  );
}
