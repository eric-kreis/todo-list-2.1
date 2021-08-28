import styled from 'styled-components';

const PageHeaderS = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  padding: 12px 36px;

  h1 {
    font-size: x-large;
    margin: 0 0 0 24px;
  }

  div {
    align-items: center;
    display: flex;
  }

  @media(max-width: 468px) {
    h1 {
      font-size: medium;
      text-align: center;
    }
  }

  @media(max-width: 380px) {
    h1 {
      font-size: 16px;
      text-align: center;
    }
  }
`;

export default PageHeaderS;
