import { shade } from "polished";

export const whiteTheme = {
  title: 'light',
  colors: {
    primary: '#C4CBD1',
    secondary: '#982649',

    background: '#ECEFF1',
    text: '#212529',
    input: '#212529'
  },
  modal: {
    windowBackground: 'rgba(0, 0, 0, 0.8)',
    modalBackground: 'whitesmoke',
  },
};

export const blackTheme = {
  title: 'dark',
  colors: {
    primary: shade(0.2, '#2F3E46'),
    secondary: '#CAD2C5',

    background: '#181818',
    text: '#ECEFF1',
    input: '#212529'
  },
  modal: {
    windowBackground: 'rgba(255, 255, 255, 0.664)',
    modalBackground: '#222',
  },
};
