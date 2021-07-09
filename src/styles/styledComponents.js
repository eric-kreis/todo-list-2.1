import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  .form-floating {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const PageHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding: 12px;

  h1 {
    font-size: x-large;
  }
`;

export const PageBody = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.backgroundColor};
`;

export const HomeMain = styled.main`
  /* background-color: blue; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  min-width: 300px;
  padding: 36px 64px;
  width: 50%;
`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SectionForm = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  width: 100%;
`;

export const IconsButtons = styled.button`
  background-color: transparent;
  border: 0;
  font-size: ${ (props) => {
    if (props.large) return '24px';
    if (props.medium) return '20px';
    return '15px'
  }};
  margin: 12px;

  :hover {
    color: ${ (props) => {
      if (props.add) return 'green';
      if (props.clear) return 'red';
      return 'blue';
    } };
  }
`;

export const FormShowButtons = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 20px;
  margin: 12px;

  :hover {
    color: blue;
  }
`;

export const TaskList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 500px;
`;

export const TaskItem = styled.li`
  width: 100%;
  overflow: hidden;
  height: 60px;
  margin: 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid black;
`;

export const TaskBody = styled.main`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const TaskLabel = styled.label`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 80%;
  max-width: 80%;

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
  display: flex;
  justify-content: space-between;
`;

export const ModalWindow = styled.main`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  padding-top: 64px;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const Modal = styled.div`
  background: whitesmoke;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  color: #000;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  height: 360px;
  width: 40%;
  margin: auto;
  padding-top: 16px;
  position: relative;
  text-align: center;
  z-index: 10;

  button {
    height: 64px;
    width: 64px;
  }
`;
