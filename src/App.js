import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import HomePage from './pages/Home';
import GlobalStyle from './styles/global';
import * as colors from './themes/';
import './styles/bootstrap.min.css'

const savedTheme = JSON.parse(localStorage.getItem('theme'));
const savedColor = localStorage.getItem('themeColor');

const initialState = {
  themeColor: !savedColor ? 'green' : savedColor,
  theme: !savedTheme ? colors.green.light : savedTheme,
};

class App extends Component {
  constructor() {
    super();
    this.toggleTheme = this.toggleTheme.bind(this);
    this.changeColor = this.changeColor.bind(this);

    this.state = initialState;
  }

  changeColor({ target }) {
    const { theme: { title } } = this.state;
    const { value } = target;
    localStorage.setItem('theme', JSON.stringify(colors[value][title]));
    localStorage.setItem('themeColor', value);
    this.setState({
      themeColor: value,
      theme: colors[value][title],
    });
  }

  toggleTheme() {
    this.setState(({ theme, themeColor }) => {
      if (theme.title === 'light') {
        localStorage.setItem('theme', JSON.stringify(colors[themeColor].dark));
        return { theme: colors[themeColor].dark };
      }
      localStorage.setItem('theme', JSON.stringify(colors[themeColor].light));
      return { theme: colors[themeColor].light };
    });
  }

  render() {
    const { theme } = this.state;

    return (
      <div>
        <ThemeProvider theme={ theme }>
          <GlobalStyle />
          <Switch>
            <Route exact path="/">
              <HomePage
                toggleTheme={ this.toggleTheme }
                changeColor={ this.changeColor }
              />
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
