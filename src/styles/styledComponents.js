import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  h1 {
    text-align: center;
  }

  .form-floating {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const PageBody = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: blue ${(props) => props.backgroundColor};
  opacity: ${(props) => props.opacity};
`;

export const HomeHeader = styled.header`
  background-color: whitesmoke;
`;

export const HomeMain = styled.main`
  width: 55%;
  min-width: 300px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MainForm = styled.form`
  width: 100%;
  display: flex;
  padding: 0 24px 0 24px;
  flex-direction: column;
`;

export const InputSectionForm = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TaskList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 500px;
  padding: 8px;
  margin: 16px;
`;

export const TaskItem = styled.li`
  width: 100%;
  height: 60px;
  margin: 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid black;
`;

export const TaskBody = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const TaskLabel = styled.label`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-evenly;
  :hover {
    cursor: pointer;
  }
`;

export const TaskButtons = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
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
  z-index: 10;

  button {
    height: 64px;
    width: 64px;
  }
`;
