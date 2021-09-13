/* eslint-disable no-magic-numbers */
import { createGlobalStyle } from 'styled-components';
import { lighten, shade, transparentize } from 'polished';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    font-kerning: none;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    min-height: 100vh;
    min-width: 100vw;
    position: ${({ active }) => (active ? 'fixed' : 'relative')};

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
    box-shadow: 0 0 0 0.25rem ${({ theme }) => (
    transparentize(0.5, theme.colors.primary))};
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

  .link {
    display: block;
    background-color: ${({ theme }) => lighten(0.1, theme.colors.primary)};
    border: 0;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    height: 40px;
    padding: 8px 0;
    width: 100%;

    :hover {
      background-color: ${({ theme }) => lighten(0.07, theme.colors.primary)};
      color: ${({ theme }) => theme.colors.text};
    }

    :disabled {
      opacity: 0.8;
    }
  }

  .link.last {
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top: 12px;;

    :hover {
      background-color: ${({ theme }) => shade(0.15, theme.colors.primary)};
    }
  }
`;

export default GlobalStyle;
