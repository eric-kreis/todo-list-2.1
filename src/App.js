import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import GlobalStyle from './styles/global';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.min.css';

import AuthProvider from './Contexts/AuthContext';
import PhotoProvider from './Contexts/PhotoContext';
import ListProvider from './Contexts/ListContext';

export default function App() {
  const theme = useSelector(({ changeTheme }) => changeTheme.theme);
  const active = useSelector(({ sideBar }) => sideBar.active);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <PhotoProvider>
          <ListProvider>
            <GlobalStyle active={active} />
            <Routes />
          </ListProvider>
        </PhotoProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
