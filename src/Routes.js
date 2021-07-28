import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={ HomePage } />
      </Switch>
    );
  }
}

export default Routes;
