import styled from 'styled-components';
import { shade, transparentize, saturate } from 'polished';


export const PageHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  min-width: 400px;
  padding: 12px 32px;

  .logo {
    color: white;
  }

  h1 {
    font-size: x-large;
    margin: 0 0 0 30px;
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
  font-size: 18px;
`;

export const HomeMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
  margin: 0 auto;
  min-width: 400px;
  padding: 64px;
  padding-bottom: 100px;
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
  font-size: ${({ large, medium }) => {
    if (large) return '24px';
    if (medium) return '20px';
    return '15px';
  }};
  margin: 24px 0 24px 24px;

  :hover {
    color: ${({ add, clear, theme }) => {
      if (add) return '#63BE25';
      if (clear) return 'red';
      return theme.colors.primary;
    } };
  }
`;

export const FormShowButtons = styled.button`
  background-color: ${({ theme, show, value }) => {
    if (show === value) {
      return transparentize(0.2, theme.colors.primary);
    }
    return transparentize(0.4, theme.colors.primary);
  }};

  box-shadow: 1px 1px 3px ${({ theme, show, value }) => {
    if (show === value) {
      return theme.colors.primary;
    }
    return transparentize(0.4, theme.colors.primary);
  }};

  border: 0;
  border-radius: 2px;
  color: ${({ theme, show, value }) => {
    if (show === value) {
      return saturate(0.25, theme.colors.text);
    }
    return theme.colors.text
  }};
  font-size: 18px;
  margin: 8px;
  min-width: 100px;
  width: 125px;
  
  :hover {
    background-color: ${({ theme }) =>
      transparentize(0.3, theme.colors.primary)};
    box-shadow: 1px 1px 3px ${({ theme }) => theme.colors.primary};
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
  }
`;

export const TaskBody = styled.main`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  :hover {
    div {
      transition: .50s opacity ease-out;
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
  text-decoration: ${(({ checkedItems, id }) => (
    checkedItems.includes(id)
    ? 'line-through'
    : 'none'
  ))};
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
  align-items: center;
  display: flex;
  height: 100%;

  input {
    margin-left: 4px;
  }
`;

export const ReturnButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  margin-left: 16px;
`

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
      font-family: yatra-one;
      font-size: 30px;
      margin: 18px;
    }
  }
`;

export const Color = styled.div`
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
    font-family: yatra-one;
    font-size: 30px;
  }

  @media(max-width: 768px) {
    width: 35%;
  }
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
  border: none;
  box-shadow: 1px 1px 6px ${transparentize(0.5, 'black')};
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
  padding: 4px 32px;
  position: absolute;
  width: 100%;

  p {
    margin: 0;
    a {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }

  div {
    display: flex;
    width: 74px;
    justify-content: space-between;

    a {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.text};

      :hover {
        cursor: pointer;
        color: ${({ theme }) => shade(0.2, theme.colors.text)};
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
