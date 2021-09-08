/* eslint-disable no-magic-numbers */
import styled from 'styled-components';

const ModalS = styled.div`
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
    width: 90%;
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

  @media(max-width: 460px) {
    width: 75%;
    height: 75%;
  }
`;

export default ModalS;
