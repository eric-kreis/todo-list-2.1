import styled from 'styled-components';

export const EditInputSection = styled.section`
  align-items: center;
  display: flex;
  height: 100%;

  input {
    margin-left: 4px;
  }
`;

export const ReturnButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  margin-left: 16px;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
