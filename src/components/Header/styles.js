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
    justify-content: space-around;

    :first-of-type {
      width: 80px;
    }

    button {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      font-size: 20px;
    }

    @media(max-width: 468px) {
      justify-content: space-around;

      :first-of-type {
        width: 100px;
      }
    }
  }

  .image-container {
    border-radius: 50%;
    height: 28px;
    overflow: hidden;
    width: 28px;

    img {
      height: 100%;
      width: 100%;
    }
  }

  h1 {
    font-size: x-large;
    margin: 0;
    text-align: center;
  }

  @media(max-width: 468px) {
    h1 {
      font-size: large;
      text-align: center;
    }
  }
`;

export default PageHeaderS;
