import { createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  html {
    position: relative;
    min-height: 100%;
}

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text}
  }

  .form-floating {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.input}
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
