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

export const HomeBody = styled.div`
  /* width: 100vw;
  height: 100%;
  background-color: blue; */
`;

export const HomeMain = styled.main`
  width: 700px;
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
  justify-content: space-between;
  width: 100%;
`;
