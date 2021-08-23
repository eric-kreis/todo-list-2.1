import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import HomePage from './pages/Home';
import Signup from './pages/Signup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/register" component={ Signup } />
      <Route path="/login" component={ Login } />
      <Route exact path="/" component={ HomePage } />
    </Switch>
  );
}
