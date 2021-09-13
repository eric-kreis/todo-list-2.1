import { transparentize } from 'polished';
import styled from 'styled-components';

const SelectBoxS = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    background-color: transparent;
    border: 0;
    border-radius: 3px;
    box-shadow: ${({ theme }) => transparentize(0.5, theme.colors.primary)} 0px 0px 5px 0px, ${({ theme }) => transparentize(0.5, theme.colors.primary)} 0px 0px 1px 0px;
    color: ${({ theme }) => theme.colors.text};
    height: 45px;
    width: 100%;
    margin-right: 8px;

    :last-of-type {
      margin-right: 0;
      margin-left: 8px;
    }
  }
`;

export default SelectBoxS;
