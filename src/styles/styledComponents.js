import styled from "styled-components";

export const PageHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  padding: 16px 28px;

  h1 {
    font-size: x-large;
  }
`;

export const HomeMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  min-width: 400px;
  padding: 36px 64px;
  width: 50%;
`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SectionForm = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  min-width: 300px;
  width: 100%;
`;

export const IconsButtons = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) =>
    theme.title === 'light' ? 'black' : 'white'};
  font-size: ${(props) => {
    if (props.large) return '24px';
    if (props.medium) return '20px';
    return '15px';
  }};
  margin: 12px;

  :hover {
    color: ${ (props) => {
      if (props.add) return '#63BE25';
      if (props.clear) return 'red';
      return '#015CC8';
    } };
  }
`;

export const FormShowButtons = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) =>
    theme.title === 'light' ? 'black' : 'white'};
  font-size: 20px;
  margin: 12px;

  :hover {
    color: #015CC8;
  }
`;

export const TaskList = styled.ul`
  /* background-image: linear-gradient(to bottom right, #02396C, #6497B1); */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  min-width: 400px;
  padding: 0 38px;
  width: 150%;
`;

export const TaskItem = styled.li`
  border-bottom: 1px solid black;
  height: 60px;
  margin: 8px;
  width: 100%;
  padding-bottom: 4px;
  overflow-x: hidden;
  /* overflow-wrap: break-word; */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TaskBody = styled.main`
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* text-decoration: line-through */
`;

export const TaskLabel = styled.label`
  align-items: center;
  display: flex;
  text-decoration: ${(({ checkedItems, id }) =>
    checkedItems.includes(id)
    ? 'line-through'
    : 'none'
  )};
  max-width: 80%;
  overflow: hidden;
  width: 80%;

  input {
    margin-right: 36px;
    :hover {
      cursor: pointer;
    }
  }

  span {
    max-width: 100%;
  }
`;

export const TaskButtons = styled.div`
  width: 20%;
  min-width: 80px;
  display: flex;
  justify-content: space-between;
`;

export const EditInputSection = styled.section`
  display: flex;
  align-items: center;
  height: 100%;

  input {
    margin-left: 4px;
  }
`;

export const ModalWindow = styled.main`
  background-color: ${({ theme }) => theme.modal.windowBackground};
  height: 100%;
  display: flex;
  padding-bottom: 64px;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const Modal = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.modal.modalBackground};
  box-shadow: 0 5px 16px black;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-flow: row wrap;
  height: 300px;
  justify-content: space-around;
  margin: auto;
  min-width: 150px;
  padding: 0 16px 8px 16px;
  position: relative;
  text-align: center;
  width: 25%;
  z-index: 10;

  button {
    font-size: 20px;
    height: 50px;
    width: 50px;
  }
`;
