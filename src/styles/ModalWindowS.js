import styled from 'styled-components';

const ModalWindowS = styled.main`
  background-color: ${({ theme }) => theme.modal.windowBackground};
  height: 100%;
  display: flex;
  padding-bottom: 64px;
  position: fixed;
  width: 100%;
  z-index: 10;

  @media(max-width: 460px) {
    padding-bottom: 0;
  }
`;

export default ModalWindowS;
