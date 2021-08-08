/* eslint-disable no-magic-numbers */
import styled from 'styled-components';
import { transparentize, shade } from 'polished';

export const MainFormS = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SectionFormS = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px;
  width: 100%;

  @media(max-width: 560px) {
    flex-wrap: wrap;
    margin-bottom: 5px;
  }
`;

export const FormShowButtonS = styled.button`
  background-color: ${({ theme, display, value }) => {
    if (display === value) {
      if (theme.title === 'light') {
        return transparentize(0.32, theme.colors.primary);
      }
      return transparentize(0.6, theme.colors.primary);
    }
    return shade(0.05, theme.colors.primary);
  }};
  border: 0;
  border-radius: 2px;
  color: ${({ theme }) => shade(0.05, theme.colors.text)};
  font-size: 18px;
  margin: 8px;
  min-width: 100px;
  width: 120px;

  :hover {
    background-color: ${({ theme }) => (
    transparentize(0.15, theme.colors.primary))};
  }

  @media(max-width: 880px) {
    font-size: 16px;
  }

  @media(max-width: 768px) {
    font-size: 18px;
  }
`;
