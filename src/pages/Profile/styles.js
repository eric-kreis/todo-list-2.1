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
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 85vh;
    margin: auto;
    overflow: scroll;
    padding: 36px 16px;
    text-align: center;
    width: 30%;

    ::-webkit-scrollbar {
      display: none;
    }

    .photo-settings {
      align-items: center;
      border-radius: 3px;
      display: flex;
      margin: 0 auto 20px;
      padding: 0 16px;
    }

    .photo-container {
      align-items: center;
      background-color: ${({ theme }) => shade(0.4, theme.colors.primary)};
      border: 1px solid ${({ theme }) => theme.colors.text};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      height: 100px;
      margin: 0 16px 0 16px;
      overflow: hidden;
      width: 100px;

      img {
        height: 100%;
        width: 100%;
        color: ${({ theme }) => theme.colors.text};
      }
    }

    .file-settings {
      display: flex;
      width: 120px;
      justify-content: space-around;
    }

    label, .delete-img-button {
      align-items: center;
      border: none;
      border-radius: 0.25rem;
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      justify-content: center;
      height: 30px;
      width: 50px;
      font-size: 30px;
    }

    label:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primary};
    }

    .delete-img-button {
      background-color: transparent;

      :hover {
        color: red;
      }
    }

    .emails-container {
      p {
        text-align: center;
        font-size: large;
      }

      ul {
        display: flex;
        flex-direction: column;
        padding: 0;
      }

      li {
        text-align: center;
        list-style-type: none;
      }
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
      width: 65%;
    }

    @media(max-width: 480px) {
      border-radius: 0;
      box-shadow: none;
      height: 100vh;
      width: 100%;
    }
  }

  p {
    font-size: large;
  }

  #img-input {
    opacity: 0;
    position: absolute;
    left: -99999px;
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

  @media(max-width: 1024px) {
    width: 35%;
  }

  @media(max-width: 768px) {
    width: 45%;
  }

  @media(max-width: 640px) {
    width: 65%;
  }

  @media(max-width: 480px) {
    width: 75%;
  }

  .photo-container {
    background-color: ${({ theme }) => shade(0.4, theme.colors.primary)};
    border: 1px solid ${({ theme }) => theme.colors.text};
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
    }
  }

`;

export default ProfileBodyS;
