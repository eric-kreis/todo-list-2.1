import styled from 'styled-components';

const PageHeaderS = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;

  .icon-container {
    align-items: center;
    display: flex;
    width: 100px;
    justify-content: space-between;

    :first-of-type {
      justify-content: space-evenly;
    }

    button {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      font-size: 20px;
    }
  }

  .image-container {
    border-radius: 50%;
    height: 26px;
    overflow: hidden;
    width: 26px;

    img {
      height: 100%;
      width: 100%;
    }
  }

  h1 {
    font-size: x-large;
    margin: 0;
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
