import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormInput from './FormInput';
import { MainForm, InputSectionForm } from '../styles/styledComponents'

class FormContainer extends Component {
  render() {
    const {
      taskText,
      formInputClass,
      mainInputFocus,
      formInputToggle,
      handleAddTask,
      handleChange,
      handleClear,
      handleFocus,
      handleRemoveFocus,
    } = this.props;

    return (
      <MainForm onSubmit={ (e) => e.preventDefault() }>
        <InputSectionForm>
          <FormInput
            name="taskText"
            value={ taskText }
            formInputClass={ formInputClass }
            mainInputFocus={ mainInputFocus }
            handleChange={ handleChange }
            formInputToggle={ formInputToggle }
            handleFocus={ handleFocus }
            handleRemoveFocus={ handleRemoveFocus }
          />
          <button
            onClick={ () => {
              handleAddTask();
              handleFocus();
            } }
          >
            Adicionar Tarefa
          </button>
          <button
            onClick={ () => {
              handleClear();
            } }
          >
            Remover Tarefas
          </button>
        </InputSectionForm>

        <div>
          <button
            name="show"
            value="all"
            onClick={ handleChange }
          >
            Todas
          </button>
          <button
            name="show"
            value="toDo"
            onClick={ handleChange }
          >
            Pendentes
          </button>
          <button
            name="show"
            value="completed"
            onClick={ handleChange }
          >
            Concluídas
          </button>
        </div>
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
