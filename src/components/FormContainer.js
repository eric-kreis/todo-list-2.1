import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Add, Trash } from '../sources/Icons';

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

          <FormShowButtons all name="show" value="all" onClick={ handleChange }>
            Todas
          </FormShowButtons>
          <FormShowButtons todo name="show" value="toDo" onClick={ handleChange }>
            Pendentes
          </FormShowButtons>
          <FormShowButtons done name="show" value="completed" onClick={ handleChange }>
            Concluídas
          </FormShowButtons>

        </SectionForm>
      </MainForm>
    )
  }
}

FormContainer.propTypes = {
  taskText: PropTypes.string.isRequired,
  mainInputFocus: PropTypes.bool.isRequired,
  handleAddTask: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleRemoveFocus: PropTypes.func.isRequired,
};

export default FormContainer;
