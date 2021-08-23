import styled from 'styled-components';

export const PasswordContainerS = styled.section`
  .form-control.is-invalid {
    background-position: right 32px center;
  }
`;

export const PasswordButtonS = styled.button`
  align-self: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.input};
  font-size: 18px;
  right: 10px;
  position: absolute;
`;
