/* eslint-disable no-magic-numbers */
import { shade } from 'polished';
import styled from 'styled-components';

export const SignUpContainerS = styled.div`
  background-color: ${({ theme }) => theme.modal.modalBackground};
  border-radius: 5px;
  box-shadow: 0 5px 16px black;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
  margin: 50px auto 0;
  max-height: 100%;
  min-width: 400px;
  padding: 16px;
  position: relative;
  overflow-y: scroll;
  text-align: center;
  z-index: 10;

  h4 {
    padding: 16px 0 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media(max-width: 768px) {
    border-radius: 0;
    height: 100vh;
    margin: auto;
    min-width: 100%;
  }
`;

export const SignUpFormS = styled.form`
  display: flex;
  flex-direction: column;
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
    padding: 10px;
    button {
      background-color: transparent;
      border: 0;
      color: ${({ theme }) => theme.colors.text};
      
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
  margin-top: 64px;
  padding: 8px 0;

  :hover {
    background-color: ${({ theme }) => shade(0.1, theme.colors.primary)};
  }
`;
