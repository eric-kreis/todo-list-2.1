import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Login from './pages/Login';
import HomePage from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={ HomePage } />
      {/* <Route exact path="/" component={ Login } /> */}
    </Switch>
  );
}
