import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createStore, combineReducers } from 'redux';
import { createMemoryHistory } from 'history';

import listState from '../redux/reducers/listState';
import changeTheme from '../redux/reducers/changeTheme';

import { green } from '../themes';

const myRender = (
  component,
  {
    initialState,
    store = createStore(
      combineReducers({listState, changeTheme}), initialState),
  } = {},
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
  theme = green.dark,
) => ({
  ...render(
    <Provider store={ store }>
      <Router history={ history }>
        <ThemeProvider theme={ theme }>
          { component }
        </ThemeProvider>
      </Router>
    </Provider>),
  store,
  history,
  theme,
});

export default myRender;
