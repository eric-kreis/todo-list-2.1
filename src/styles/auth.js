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
  color: ${({ theme }) => theme.colors.input};
  display: grid;
  grid-template-rows: 4fr 6fr;
  height: ${({ defaultH }) => (defaultH ? '' : '85vh')};
  margin: auto;
  overflow-y: scroll;
  padding: ${({ update }) => (update ? '48px' : '10px')} 16px ${({ update }) => (update ? '24px' : 0)};
  text-align: center;
  width: 30%;

  ::-webkit-scrollbar {
    display: none;
  }

  @media(max-width: 1024px) {
    width: 50%;
  }

  @media(max-width: 768px) {
    width: 60%;
  }

  @media(max-width: 640px) {
    border-radius: 0;
    box-shadow: none;
    height: 100vh;
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
    return 'center';
  }};
  margin-top: ${({ login }) => login && '30px'};

  .error {
    color: red;
    font-size: small;
    margin-bottom: 4px;
    padding: 0;
    padding-left: 4px;
    text-align: left;
  }

  .success {
    color: green;
    font-size: small;
    margin-bottom: 4px;
    padding: 0;
    padding-left: 4px;
    text-align: left;
  }

  .form-floating {
    background-color: ${({ theme }) => theme.modal.modalBackground};
    border-radius: 10px;
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

  .link-container {
    padding: ${({ signup, login }) => {
    if (signup) {
      return '28px';
    }
    if (login) {
      return '32px';
    }
    return 0;
  }};

    p {
      margin: ${({ update }) => (update ? '16px' : '8px')} 0 0 0;
    }

    a {
      color: ${({ theme }) => theme.colors.input};
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
  width: 100%;

  :disabled {
    opacity: 0.8;
  }

  :hover {
    background-color: ${({ theme }) => shade(0.1, theme.colors.primary)};
  }
`;
