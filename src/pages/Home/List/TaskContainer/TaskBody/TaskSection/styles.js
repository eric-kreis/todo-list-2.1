import styled from 'styled-components';

const TaskLabelS = styled.label`
  align-items: center;
  display: flex;
  text-decoration: ${(({ checkedItems, id }) => (
    (checkedItems.includes(id))
      ? 'line-through'
      : 'none'
  ))};
  max-width: 80%;
  overflow: hidden;
  width: 100%;

  input {
    margin-right: 36px;

    :hover {
      cursor: pointer;
    }
  }

  span {
    max-width: 100%;
  }

  @media(max-width: 560px) {
    font-size: 14px;
  }
`;

export default TaskLabelS;
