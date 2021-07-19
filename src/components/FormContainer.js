import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Add, Trash } from '../icons/Icons';

import FormInput from './FormInput';
import {
  MainForm,
  SectionForm,
  IconsButtons,
  FormShowButtons,
} from '../styles/styledComponents'

class FormContainer extends Component {
  render() {
    const {
      show,
      taskText,
      formInputClass,
      mainInputFocus,
      formClassToggle,
      handleAddTask,
      handleChange,
      handleToggleModal,
      handleFocus,
      handleRemoveFocus,
    } = this.props;

    return (
      <MainForm onSubmit={ (e) => e.preventDefault() }>
        <SectionForm>
          <FormInput
            name="taskText"
            value={ taskText }
            formInputClass={ formInputClass }
            mainInputFocus={ mainInputFocus }
            handleChange={ handleChange }
            formClassToggle={ formClassToggle }
            handleFocus={ handleFocus }
            handleRemoveFocus={ handleRemoveFocus }
          />
          <IconsButtons
            add
            large
            onClick={ () => {
              handleAddTask();
              handleFocus();
            } }
          >
            <Add title="Adicionar tarefa"/>
          </IconsButtons>
          <IconsButtons
            clear
            large
            onClick={ () => {
              handleToggleModal('clear');
            } }
          >
            <Trash title="Remover Tarefas" />
          </IconsButtons>
        </SectionForm>
        <SectionForm>
          <FormShowButtons
            name="show"
            value="all"
            onClick={ handleChange }
            show={ show }
          >
            Todas
          </FormShowButtons>
          <FormShowButtons
            name="show"
            value="toDo"
            onClick={ handleChange }
            show={ show }
          >
            Pendentes
          </FormShowButtons>
          <FormShowButtons
            name="show"
            value="completed"
            onClick={ handleChange }
            show={ show }
          >
            Concluídas
          </FormShowButtons>
        </SectionForm>
      </MainForm>
    )
  }
}

FormContainer.propTypes = {
  show: PropTypes.string.isRequired,
  taskText: PropTypes.string.isRequired,
  formInputClass: PropTypes.string.isRequired,
  mainInputFocus: PropTypes.bool.isRequired,
  formClassToggle: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleRemoveFocus: PropTypes.func.isRequired,
};

export default FormContainer;
