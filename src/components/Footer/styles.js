/* eslint-disable no-magic-numbers */
import styled from 'styled-components';
import { shade } from 'polished';

const PageFooterS = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 4px 36px;
  width: 100%;

  p {
    margin: 0;
    a {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }

  div {
    display: flex;
    width: 74px;
    justify-content: space-between;

    a {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.text};

      :hover {
        cursor: pointer;
        color: ${({ theme }) => shade(0.2, theme.colors.text)};
      }
    }
  }

  @media(max-width: 460px) {
    p, p a {
      font-size: 14px;
    }

    div {
      width: 60px;
      a {
        font-size: 20px;
      }
    }
  }

  @media(max-width: 380px) {
    p, p a {
      font-size: 12px;
    }

    div {
      width: 50px;
      a {
        font-size: 18px;
      }
    }
  }
`;

export default PageFooterS;
