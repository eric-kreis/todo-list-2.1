import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { GlobalStyle } from './styles/styledComponents'
import './styles/bootstrap.min.css'
import './styles/changingBootstrap.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/"><HomePage /></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
