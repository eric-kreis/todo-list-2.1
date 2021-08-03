/* eslint-disable no-magic-numbers */
import { lighten } from 'polished';

export const lightBlue = {
  title: 'light',
  colors: {
    primary: `${lighten(0.1, '#387FAB')}`,
    secondary: '#982649',

    background: '#f4f4f4',
    text: '#052252',
    input: '#052252',
  },
  modal: {
    windowBackground: 'rgba(0, 0, 0, 0.8)',
    modalBackground: 'whitesmoke',
  },
};

export const darkBlue = {
  title: 'dark',
  colors: {
    primary: '#174070',
    secondary: '#CAD2C5',

    background: '#212529',
    text: 'whitesmoke',
    input: '#052252',
  },
  modal: {
    windowBackground: 'rgba(255, 255, 255, 0.664)',
    modalBackground: '#222',
  },
};
