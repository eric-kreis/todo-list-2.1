import { createActions, createReducer } from 'reduxsauce';
import * as colors from '../../../themes';

const savedTheme = JSON.parse(localStorage.getItem('theme'));
const savedColor = localStorage.getItem('themeColor');

export const { Types, Creators } = createActions({
  changeColor: ({ target: { value } }) => ({
    type: 'CHANGE_COLOR', value }),
  toggleTheme: [],
});

const INITIAL_STATE = {
  themeColor: !savedColor ? 'green' : savedColor,
  theme: !savedTheme ? colors.green.light : savedTheme,
};

const change = (state = INITIAL_STATE, action) => {
  localStorage.setItem('themeColor', action.value);
  localStorage.setItem('theme', JSON.stringify(colors[action.value][state.theme.title]));
  return {
    ...state,
    themeColor: action.value,
    theme: colors[action.value][state.theme.title],
  };
};

const toggle = (state = INITIAL_STATE) => {
  if (state.theme.title === 'light') {
    localStorage.setItem('theme', JSON.stringify(colors[state.themeColor].dark));
    return { ...state, theme: colors[state.themeColor].dark };
  }
  localStorage.setItem('theme', JSON.stringify(colors[state.themeColor].light));
  return { ...state, theme: colors[state.themeColor].light };
};

export default createReducer(INITIAL_STATE, {
  [Types.CHANGE_COLOR]: change,
  [Types.TOGGLE_THEME]: toggle,
});
