import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from './pages/Login';
import HomePage from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import PasswordReset from './pages/PasswordReset';
import UpdateProfile from './pages/UpdateProfile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/reset-password" component={PasswordReset} />
      <Route path="/register" component={Signup} />
      <PrivateRoute path="/update-profile" component={UpdateProfile} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={HomePage} />
    </Switch>
  );
}
