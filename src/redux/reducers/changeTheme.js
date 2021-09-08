import { createActions, createReducer } from 'reduxsauce';
import { getStorage, saveStorage } from '../../helpers';
import * as colors from '../../themes';

export const { Types, Creators } = createActions({
  changeColor: ({ target: { value } }) => ({
    type: Types.CHANGE_COLOR,
    value,
  }),
  toggleTheme: [],
});

const savedColor = localStorage.getItem('themeColor') || 'green';
const savedTheme = getStorage('theme', colors.green.light);

const INITIAL_STATE = {
  themeColor: savedColor,
  theme: savedTheme,
};

const change = (state = INITIAL_STATE, action) => {
  localStorage.setItem('themeColor', action.value);
  saveStorage('theme', colors[action.value][state.theme.title]);
  return {
    ...state,
    themeColor: action.value,
    theme: colors[action.value][state.theme.title],
  };
};

const toggle = (state = INITIAL_STATE) => {
  if (state.theme.title === 'light') {
    saveStorage('theme', colors[state.themeColor].dark);
    return { ...state, theme: colors[state.themeColor].dark };
  }
  saveStorage('theme', colors[state.themeColor].light);
  return { ...state, theme: colors[state.themeColor].light };
};

export default createReducer(INITIAL_STATE, {
  [Types.CHANGE_COLOR]: change,
  [Types.TOGGLE_THEME]: toggle,
});
