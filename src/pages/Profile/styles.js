/* eslint-disable no-magic-numbers */
import styled from 'styled-components';
import { shade } from 'polished';

const ProfileBodyS = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  min-height: 100vh;

  .profile-container {
    background-color: whitesmoke;
    border-radius: 5px;
    box-shadow: 1px 1px 10px ${({ theme }) => shade(0.2, theme.colors.primary)};
    color: ${({ theme }) => theme.colors.input};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 85vh;
    margin: auto;
    overflow: scroll;
    padding: 36px 16px 16px;
    text-align: center;
    width: 35%;

    ::-webkit-scrollbar {
      display: none;
    }

    button {
      font-size: 18px;
    }

    @media(max-width: 1024px) {
      width: 45%;
    }

    @media(max-width: 768px) {
      width: 55%;
    }

    @media(max-width: 640px) {
      border-radius: 0;
      box-shadow: none;
      height: 100vh;
      max-height: 100vh;
      width: 100%;
    }
  }
  
  .logout-container {
    display: flex;
    justify-content: right;
    margin-top: 16px;
    width: 100%;

    button {
      background-color: transparent;
      border: 0;
      border-radius: 3px;
      color: ${({ theme }) => theme.colors.text};
      font-size: 22px;
      padding: 1px 0;
      width: 30px;

      :hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const ModalSectionS = styled.section`
  background-color: ${({ theme }) => theme.modal.modalBackground};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.text};
  margin: auto;
  text-align: center;
  padding: 32px;
  width: 25%;

  .photo-container {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    justify-content: center;
    height: 125px;
    margin: 0 auto 32px;
    overflow: hidden;
    width: 125px;

    img {
      height: 100%;
      width: 100%;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .modal-buttons-container {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 70%;

    button {
      background-color: ${({ theme }) => theme.colors.text};
      border: 0;
      border-radius: 2px;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 18px;
      width: 100%;

      :first-of-type {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: 8px;
      }

      .delete-button {
        background-color: red;
      }
    }
  }

  @media(max-width: 1024px) {
    width: 35%;
  }

  @media(max-width: 768px) {
    width: 45%;
  }

  @media(max-width: 640px) {
    width: 75%;
  }
`;

export default ProfileBodyS;
