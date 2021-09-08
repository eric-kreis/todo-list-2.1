import styled from 'styled-components';

export const HomeBodyS = styled.section`
  position: relative;
  min-height: 100vh;
  margin-left: ${({ active }) => (active ? '160px' : '65px')};
  transition: margin 0.5s ease;
  width: calc(100% - ${({ active }) => (active ? '160px' : '65px')});
`;

export const HomeMainS = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  padding: 60px 64px 60px;
  transition: margin width 0.5s ease;
  width: 48%;

  @media(max-width: 1080px) {
    width: 60%;
  }

  @media(max-width: 768px) {
    min-width: 380px;
    padding: 60px 20px 60px;
    width: 70%;
  }

  @media(max-width: 560px){
    min-width: 250px;
    padding: 60px 0 60px;
  }
`;

export const ThemeButtonS = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 16px;
  font-size: 18px;
`;
