import { transparentize } from 'polished';
import styled from 'styled-components';

const SelectBoxS = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;

  button {
    background-color: transparent;
    border: 0;
    border-radius: 3px;
    box-shadow: ${({ theme }) => transparentize(0.5, theme.colors.primary)} 0px 0px 5px 0px, ${({ theme }) => transparentize(0.5, theme.colors.primary)} 0px 0px 1px 0px;
    color: ${({ theme }) => theme.colors.text};
    height: 45px;
    width: 128px;
  }
`;

export default SelectBoxS;
