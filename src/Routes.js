import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import HomePage from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import PrivateRoute from './PrivateRoute';

export default function Routes() {
  return (
    <Switch>
      <Route path="/register" component={Signup} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={HomePage} />
    </Switch>
  );
}
