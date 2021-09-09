import styled from 'styled-components';

export const HomeSectionS = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  padding: 32px 64px 20px;
  transition: margin width 0.5s ease;
  width: 48%;

  @media(max-width: 1080px) {
    width: 60%;
  }

  @media(max-width: 768px) {
    min-width: 380px;
    padding: 32px 20px 60px;
    width: 70%;
  }

  @media(max-width: 560px){
    min-width: 250px;
    padding: 32px 0 60px;
  }
`;

export const HomeMainS = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 48px);

  @media(max-width: 375px) {
    min-height: calc(100vh - 54px);
  }
`;
