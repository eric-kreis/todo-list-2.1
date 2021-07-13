import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import lightGreen from './themes/green/light';
import darkGreen from './themes/green/dark';
import './styles/bootstrap.min.css'
import './styles/changingBootstrap.css';
import HomePage from './pages/HomePage';

const savedTheme = JSON.parse(localStorage.getItem('theme'));

class App extends Component {
  constructor() {
    super();
    this.toggleTheme = this.toggleTheme.bind(this);

    this.state = {
      themeColor: 'green',
      theme: savedTheme === null ? lightGreen : savedTheme,
    }
  }

  toggleTheme() {
    this.setState(({ theme }) => {
      if (theme.title === 'light') {
        localStorage.setItem('theme', JSON.stringify(darkGreen));
        return { theme: darkGreen };
      }
      localStorage.setItem('theme', JSON.stringify(lightGreen));
      return { theme: lightGreen };
    });
  }

  render() {
    const { theme } = this.state;

    return (
      <BrowserRouter>
        <ThemeProvider theme={ theme }>
          <GlobalStyle />
          <Switch>
            <Route exact path="/">
              <HomePage
                toggleTheme={ this.toggleTheme }
                theme={ theme }
              />
            </Route>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
