import { shade } from "polished";

export const lightGreen = {
  title: 'light',
  colors: {
    primary: '#68B684',
    secondary: '#982649',

    background: '#f4f4f4',
    text: '#333',
    input: '#333'
  },
  modal: {
    windowBackground: 'rgba(0, 0, 0, 0.8)',
    modalBackground: 'whitesmoke',
  },
};

export const darkGreen = {
  title: 'dark',
  colors: {
    primary: shade(0.55, '#68B684'),
    secondary: '#CAD2C5',

    background: '#181818',
    text: '#fff',
    input: '#333'
  },
  modal: {
    windowBackground: 'rgba(255, 255, 255, 0.664)',
    modalBackground: '#222',
  },
};
