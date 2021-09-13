import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from './pages/Login';
import HomePage from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import PasswordReset from './pages/PasswordReset';
import UpdateCredentials from './pages/UpdateCredentials';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/update-credentials" component={UpdateCredentials} />
      <Route path="/reset-password" component={PasswordReset} />
      <Route path="/register" component={Signup} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/" component={HomePage} />
    </Switch>
  );
}
