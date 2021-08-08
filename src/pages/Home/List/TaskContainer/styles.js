import styled from 'styled-components';

const ItemS = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  .form-floating > .form-control {
    height: 43px;
  }
  
  .form-floating > label {
    padding: 22px 16px;
    font-family: ubuntu;
    font-display: fallback;
  }
`;

export default ItemS;
