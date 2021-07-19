import { createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';
import mountserrat400 from '../fonts/Montserrat-Regular.ttf';
import YatraOne from '../fonts/YatraOne-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: mountserrat400;
    src: url(${mountserrat400});
    font-style: normal;
  }

  @font-face {
    font-family: yatra-one;
    src: url(${YatraOne});
    font-style: normal;
  }

  * {
    font-kerning: none;
    padding: 0;
    margin: 0;
    font-family: mountserrat400;
  }

  html {
    position: relative;
    min-height: 100vh;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .form-floating {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.input};
  }

  .form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
    outline: 0;
    box-shadow: 0 0 0 0.25rem ${({ theme }) =>
      transparentize(0.5, theme.colors.primary)};
  }
`;
