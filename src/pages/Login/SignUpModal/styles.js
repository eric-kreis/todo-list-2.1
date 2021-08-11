import styled from 'styled-components';

export const SignUpContainerS = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.modal.modalBackground};
  border-radius: 5px;
  box-shadow: 0 5px 16px black;
  color: ${({ theme }) => theme.colors.text};
  height: 80vh;
  margin: 60px auto 0;
  min-height: 50vh;
  min-width: 400px;
  overflow-y: scroll;
  padding: 48px 16px;
  position: relative;
  text-align: center;
  z-index: 10;

  ::-webkit-scrollbar {
    display: none;
  }

  h4 {
    margin-bottom: 32px;
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
  margin-top: 48px;

  .form-floating {
    background-color: ${({ theme }) => theme.modal.modalBackground};
    color: ${({ theme }) => theme.colors.input};
    margin-bottom: 8px;
  }

  .form-control {
    background-color: ${({ theme }) => theme.modal.modalBackground};
  }

  .form-control:focus {
    color: #212529;
    outline: 0;
    &:-webkit-autofill:first-line {
      font-size: 1rem;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 64px;
  padding: 8px 0;
`;
