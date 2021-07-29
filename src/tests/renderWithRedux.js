import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createStore, combineReducers } from 'redux';
import { createMemoryHistory } from 'history';

import formInput from '../redux/reducers/formInput';
import listState from '../redux/reducers/listState';
import changeTheme from '../redux/reducers/changeTheme';

import { green } from '../themes';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(
      combineReducers({
        formInput,
        listState,
        changeTheme,
      }), initialState),
  } = {},
  theme = green.dark,
) => {
  const history = createMemoryHistory();
  return {
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
  }
};

export default renderWithRedux;
