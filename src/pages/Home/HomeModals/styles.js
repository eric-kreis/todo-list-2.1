import styled from 'styled-components';
import { transparentize } from 'polished';

export const ModalWindowS = styled.main`
  background-color: ${({ theme }) => theme.modal.windowBackground};
  height: 100%;
  display: flex;
  padding-bottom: 64px;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const ModalS = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.modal.modalBackground};
  border-radius: 5px;
  box-shadow: 0 5px 16px black;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-flow: row wrap;
  height: 260px;
  justify-content: space-around;
  margin: auto;
  min-width: 250px;
  padding: 32px 16px;
  position: relative;
  text-align: center;
  width: 25%;
  z-index: 10;

  div {
    display: flex;
    width: 60%;
    justify-content: space-around;

    button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.text};
      display: inline-block;
      font-display: fallback;
      font-size: 28px;
      margin: 18px;
    }
  }
`;

export const ColorsContainerS = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.modal.modalBackground};
  border-radius: 5px;
  box-shadow: 5px 5px 10px ${transparentize(0.6, 'black')};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: auto;
  min-width: 200px;
  padding: 4px 16px 24px 16px;
  position: relative;
  width: 20%;
  z-index: 10;

  .modal-button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    display: inline-block;
    font-display: fallback;
    font-size: 24px;
  }

  @media(max-width: 460px) {
    width: 45%;
  }
`;

export const ColorButtonsContainerS = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-width: 150px;
  padding: 10%;
  width: 100%;
  height: 200px;
`;

export const ColorButtonS = styled.button`
  border: none;
  box-shadow: 1px 1px 6px ${transparentize(0.5, 'black')};
  border-radius: 50%;
  background-color: ${({ color }) => color };
  height: 50px;
  margin: 5px;
  width: 50px;
`;

