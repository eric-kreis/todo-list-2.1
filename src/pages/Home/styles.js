import styled from 'styled-components';

export const HomeMainS = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
  margin: 0 auto;
  padding: 60px 64px 100px;
  width: 48%;

  @media(max-width: 1080px) {
    width: 60%;
  }

  @media(max-width: 768px) {
    min-width: 380px;
    padding: 60px 20px 100px;
    width: 70%;
  }

  @media(max-width: 560px){
    min-width: 250px;
    padding: 60px 0 100px;
  }
`;

export const ThemeButtonS = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 16px;
  font-size: 18px;
`;
