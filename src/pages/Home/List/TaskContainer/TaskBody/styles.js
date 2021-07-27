import styled from 'styled-components';

export const TaskBodyS = styled.main`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  :hover {
    div {
      transition: .50s opacity ease-out;
      opacity: 1;
    }
  }

  @media(max-width: 768px) {
    div {
      opacity: 1;
    }
  }
`;

export const TaskButtonS = styled.div`
  align-items: center;
  display: flex;
  min-width: 100px;
  justify-content: space-between;
  width: 15%;
  opacity: 0;
`;
