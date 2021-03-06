import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.css';

function App({ theme }) {
  return (
    <div>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

App.propTypes = {
  theme: PropTypes.shape({
    title: PropTypes.string,
    colors: PropTypes.shape({
      primary: PropTypes.string,
      secondary: PropTypes.string,

      background: PropTypes.string,
      text: PropTypes.string,
      input: PropTypes.string,
    }),
    modal: PropTypes.shape({
      windowBackground: PropTypes.string,
      modalBackground: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = ({ changeTheme }) => ({
  theme: changeTheme.theme });

export default connect(mapStateToProps)(App);
