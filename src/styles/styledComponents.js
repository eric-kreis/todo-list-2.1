import styled from 'styled-components';
import { shade, transparentize } from 'polished';

export const PageHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  padding: 12px 32px;
  min-width: 400px;

  h1 {
    font-size: x-large;
    text-align: center;
  }

  div {
    align-items: center;
    display: flex;
  }

  @media(max-width: 460px) {
    h1 {
      font-size: medium;
      text-align: center;
    }
  }
`;

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 16px;
  transform: rotate(90deg);
  font-size: 15px;
`;

export const HomeMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
  margin: 0 auto;
  padding: 64px;
  padding-bottom: 80px;
  width: 48%;
`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 310px;
`;

export const SectionForm = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px;
  width: 100%;

  @media(max-width: 768px) {
    flex-wrap: wrap;
    margin-bottom: 0;
  }
`;

export const IconsButtons = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${(props) => {
    if (props.large) return '24px';
    if (props.medium) return '20px';
    return '15px';
  }};
  margin: 12px;

  :hover {
    color: ${(props) => {
      if (props.add) return '#63BE25';
      if (props.clear) return 'red';
      return '#015CC8';
    } };
  }
`;

export const FormShowButtons = styled.button`
  background-color: ${({ theme }) =>
    transparentize(0.4, theme.colors.primary)};
  box-shadow: 1px 1px 3px ${({ theme }) =>
    shade(0.2, theme.colors.primary)};
  border: 0;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin: 8px;
  width: 125px;
  min-width: 100px;
  /* transition: background-color 0.3s, color 0.3s, box-shadow 0.3s; */

  :hover {
    color: ${({ all, todo, done, theme }) => {
      if (all) return theme.colors.text;
      if (todo) return '#F1C235';
      if (done) return shade(0.3, '#5AC8FA');
    }};

    background-color: ${({ theme }) =>
      transparentize(0.2, theme.colors.primary)};
    box-shadow: 1px 1px 3px ${({ theme }) =>
      shade(0.4, theme.colors.primary)};
  }
`;

export const TaskList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  min-width: 310px;
  padding: 0;
  width: 100%;
`;

export const TaskItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  width: 100%;
  min-height: 65px;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }

  .form-floating > .form-control {
    height: 43px;
  }
  
  .form-floating > label {
    padding: 20px 16px;
    font-family: ubuntu;
  }
`;

export const TaskBody = styled.main`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  :hover {
    div {
      opacity: 1;
    }
  }

  @media(max-width: 768px) {
    div {
      opacity: 1;
    }
  }
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
  width: 85%;

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
  width: 15%;
  min-width: 80px;
  display: flex;
  justify-content: space-between;
  opacity: 0;
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
`;

export const ColorButtonsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-width: 150px;
  padding: 10%;
  width: 100%;
  height: 200px;
`;

export const ColorButtons = styled.button`
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${({ color }) => color };
  height: 50px;
  width: 50px;
`;

export const PageFooter = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => shade(0.25, theme.colors.primary)};
  bottom: 0;
  display: flex;
  justify-content: space-between;
  min-width: 400px;
  padding: 8px 32px;
  position: absolute;
  width: 100%;

  p {
    margin: 0;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      :hover {
        text-decoration: underline;
      }
    }
  }

  div {
    display: flex;
    font-size: 22px;

    * {
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      justify-content: space-between;
      width: 45px;

      :hover {
        cursor: pointer;
      }
    }
  }

  @media(max-width: 460px) {
    p {
      font-size: 14px;
    }

    div {
    font-size: 20px;
    }
  }
`;
