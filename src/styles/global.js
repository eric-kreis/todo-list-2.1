import { createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';
import mountserrat400 from '../fonts/Montserrat-Regular.ttf';
import YatraOne from '../fonts/YatraOne-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: fallback;
    font-family: mountserrat400;
    font-style: normal;
    src: url(${mountserrat400});
  }

  @font-face {
    font-display: fallback;
    font-family: yatra-one;
    font-style: normal;
    src: url(${YatraOne});
  }

  * {
    font-family: mountserrat400;
    font-kerning: none;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    min-height: 100vh;
    position: relative;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .form-floating > .form-control {
    height: 45px;
  }

  .form-floating > label {
    padding: .65rem .55rem;
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
    box-shadow: 0 0 0 0.25rem ${({ theme }) =>
      transparentize(0.5, theme.colors.primary)};
    outline: 0;
  }

  .react-switch-bg > div {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .moon {
    font-size: 14px;
  }
`;

export default GlobalStyle;
