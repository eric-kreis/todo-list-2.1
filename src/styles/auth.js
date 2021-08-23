/* eslint-disable no-magic-numbers */
import { shade } from 'polished';
import styled from 'styled-components';

export const AuthBodyS = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  min-height: 100vh;
`;

export const AuthContainerS = styled.section`
  background-color: whitesmoke;
  border-radius: 5px;
  box-shadow: 1px 1px 10px ${({ theme }) => shade(0.2, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  grid-template-rows: 3fr 5fr;
  height: 85vh;
  margin: auto;
  overflow-y: scroll;
  padding: 10px 16px 0;
  text-align: center;
  width: 30%;

  ::-webkit-scrollbar {
    display: none;
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
`;

export const AuthFormS = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: ${({ signup, login }) => {
    if (signup) {
      return 'flex-end';
    }
    if (login) {
      return 'space-around';
    }
  }};
  margin-top: ${({ login }) => login && '30px'};
  max-height: 100%;

  .error {
    color: red;
    font-size: small;
    margin-bottom: 4px;
    padding: 0;
    padding-left: 4px;
    text-align: left;
  }

  .form-floating {
    background-color: ${({ theme }) => theme.modal.modalBackground};
    color: ${({ theme }) => theme.colors.input};
    margin-bottom: 8px;
  }

  .form-control {
    background-color: whitesmoke;
  }

  .form-control:focus {
    color: #212529;
    outline: 0;

    &:-webkit-autofill:first-line {
      font-size: 1rem;
    }
  }

  p {
    padding: ${({ signup, login }) => {
      if (signup) {
        return '10px';
      }
      if (login) {
        return '32px';
      }
    }};
    a {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      
      :hover {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: underline;
      }
    }
  }

`;

export const SubmitButtonS = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 32px;
  padding: 8px 0;

  :hover {
    background-color: ${({ theme }) => shade(0.1, theme.colors.primary)};
  }
`;
