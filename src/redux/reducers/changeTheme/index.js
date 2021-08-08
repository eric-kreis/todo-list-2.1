import { CHANGE_COLOR } from './actions/changeColor';
import { TOGGLE_THEME } from './actions/toggleTheme';

import * as colors from '../../../themes';

const savedTheme = JSON.parse(localStorage.getItem('theme'));
const savedColor = localStorage.getItem('themeColor');

const INITIAL_STATE = {
  themeColor: !savedColor ? 'green' : savedColor,
  theme: !savedTheme ? colors.green.light : savedTheme,
};

const changeTheme = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_COLOR:
    localStorage.setItem('themeColor', action.value);
    localStorage
      .setItem('theme', JSON.stringify(colors[action.value][state.theme.title]));
    return {
      ...state,
      themeColor: action.value,
      theme: colors[action.value][state.theme.title],
    };

  case TOGGLE_THEME:
    if (state.theme.title === 'light') {
      localStorage.setItem('theme', JSON.stringify(colors[state.themeColor].dark));
      return { ...state, theme: colors[state.themeColor].dark };
    }
    localStorage.setItem('theme', JSON.stringify(colors[state.themeColor].light));
    return { ...state, theme: colors[state.themeColor].light };

  default:
    return state;
  }
};

export default changeTheme;
