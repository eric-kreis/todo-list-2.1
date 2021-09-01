import { getStorage } from '../../../helpers';
import * as colors from '../../../themes';

const savedColor = getStorage('themeColor', 'green');
const savedTheme = getStorage('theme', colors.green.light);

const Types = {
  CHANGE_COLOR: 'Types/CHANGE_COLOR',
  TOGGLE_THEME: 'Types/TOGGLE_THEME',
};

export const Creators = {
  changeColor: ({ target: { value } }) => ({ type: Types.CHANGE_COLOR, value }),
  toggleTheme: () => ({ type: Types.TOGGLE_THEME }),
};

const INITIAL_STATE = {
  themeColor: savedColor,
  theme: savedTheme,
};

export default function changeTheme(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGE_COLOR:
      localStorage.setItem('themeColor', action.value);
      localStorage.setItem('theme', JSON.stringify(colors[action.value][state.theme.title]));
      return {
        ...state,
        themeColor: action.value,
        theme: colors[action.value][state.theme.title],
      };
    case Types.TOGGLE_THEME:
      if (state.theme.title === 'light') {
        localStorage.setItem('theme', JSON.stringify(colors[state.themeColor].dark));
        return { ...state, theme: colors[state.themeColor].dark };
      }
      localStorage.setItem('theme', JSON.stringify(colors[state.themeColor].light));
      return { ...state, theme: colors[state.themeColor].light };
    default:
      return state;
  }
}
