import { createGlobalStyle } from 'styled-components';

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
`;
