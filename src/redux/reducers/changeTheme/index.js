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
    const { theme: { title } } = state;
    const { value } = action;
    localStorage.setItem('themeColor', value);
    localStorage.setItem('theme', JSON.stringify(colors[value][title]));
    return {...state, themeColor: value, theme: colors[value][title] };

  case TOGGLE_THEME:
    const { theme, themeColor } = state;

    if (theme.title === 'light') {
      localStorage.setItem('theme', JSON.stringify(colors[themeColor].dark));
      return { ...state, theme: colors[themeColor].dark };
    }
    localStorage.setItem('theme', JSON.stringify(colors[themeColor].light));
    return { ...state, theme: colors[themeColor].light };

  default:
    return state;
  }
};

export default changeTheme;
