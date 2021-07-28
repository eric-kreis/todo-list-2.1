import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Routes from './Routes';
import './styles/bootstrap.min.css'

class App extends Component {
  render() {
    const { theme } = this.props;

    return (
      <div>
        <ThemeProvider theme={ theme }>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ changeTheme }) => ({
  theme: changeTheme.theme });

export default connect(mapStateToProps)(App);
