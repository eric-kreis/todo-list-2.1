import styled from 'styled-components';
import * as themeColors from '../../../themes';

export const ColorsContainerS = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0 5px 5px 0;
  display: none;
  flex-flow: row wrap;
  justify-content: space-around;
  left: 200px;
  padding: 20px;
  position: absolute;

  @media(max-width: 390px) {
    bottom: -58px;
  }
`;

export const ColorButtonsContainerS = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-width: 150px;
  width: 100%;
  height: 100%;

  :hover {
    cursor: default;
  }

  @media(max-width: 390px) {
    min-width: 0;
  }
`;

export const ColorButtonS = styled.button`
  border: 0;
  border-radius: 50%;
  background-color: ${({ value }) => (themeColors[value].light.colors.primary)};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  height: 40px;
  margin: 5px;
  width: 40px;
`;
