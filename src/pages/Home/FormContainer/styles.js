/* eslint-disable no-magic-numbers */
import styled from 'styled-components';
import { lighten, transparentize, saturate, shade } from 'polished';

export const MainFormS = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 310px;
`;

export const SectionFormS = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px;
  width: 100%;

  @media(max-width: 1008px) {
    flex-wrap: wrap;
    margin-bottom: 0;
  }
`;

export const FormShowButtonS = styled.button`
  background-color: ${({ theme, display, value }) => (
    (display === value)
      ? lighten(0.1, theme.colors.primary)
      : transparentize(0.4, theme.colors.primary)
  )};

  box-shadow: 1px 1px 2px ${({ theme, display, value }) => (
    (display === value)
      ? theme.colors.primary
      : transparentize(0.4, theme.colors.primary)
  )};

  border: 0;
  border-radius: 2px;
  color: ${({ theme, display, value }) => (
    (display === value)
      ? saturate(0.2, theme.colors.text)
      : shade(0.05, theme.colors.text)
  )};
  font-size: 18px;
  margin: 8px;
  min-width: 100px;
  width: 125px;
  
  :hover {
    background-color: ${({ theme }) => (
    lighten(0.04, theme.colors.primary))};
    box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.primary};
  }

  @media(max-width: 860px) {
    font-size: 16px;
    width: 80px;
  }
`;
