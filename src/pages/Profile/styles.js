/* eslint-disable no-magic-numbers */
import styled from 'styled-components';
import { shade } from 'polished';

const ProfileBodyS = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  min-height: 100vh;

  div {
    background-color: whitesmoke;
    border-radius: 5px;
    box-shadow: 1px 1px 10px ${({ theme }) => shade(0.2, theme.colors.primary)};
    color: ${({ theme }) => theme.colors.text};
    height: 85vh;
    margin: auto;
    overflow-y: scroll;
    padding: 10px 16px 0;
    text-align: center;
    width: 30%;

    ::-webkit-scrollbar {
      display: none;
    }

    .photo-container {
      align-items: center;
      background-color: ${({ theme }) => shade(0.4, theme.colors.primary)};
      border: 1px solid ${({ theme }) => theme.colors.text};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      height: 100px;
      margin: auto;
      width: 100px;

      .logo {
        height: 90%;
        width: 90%;
        color: ${({ theme }) => theme.colors.text};
      }
    }

    @media(max-width: 1024px) {
      width: 40%;
    }

    @media(max-width: 768px) {
      width: 50%;
    }

    @media(max-width: 640px) {
      width: 60%;
    }

    @media(max-width: 480px) {
      border-radius: 0;
      box-shadow: none;
      height: 100%;
      width: 100%;
    }
  }

`;

export default ProfileBodyS;
