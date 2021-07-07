import React, { Component } from 'react';

import FormInput from './FormInput';
import PropTypes from 'prop-types';

class FormContainer extends Component {
  render() {
    const {
      taskText,
      formInputClass,
      mainInputFocus,
      handleChangeView,
      handleAddTask,
      handleChange,
      handleClear,
      handleFocus,
      handleRemoveFocus,
    } = this.props;

    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <FormInput
          name="taskText"
          value={ taskText }
          formInputClass={ formInputClass }
          mainInputFocus={ mainInputFocus }
          handleChange={ handleChange }
          handleFocus={ handleFocus }
          handleRemoveFocus={ handleRemoveFocus }
        />
        <div>
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
        </div>
        <div>
          <button onClick={ handleChangeView }
          >
            Todas
          </button>
          <button
            onClick={ () => {
              handleChangeView('toDo');
            } }
          >
            Pendentes
          </button>
          <button
            onClick={ () => {
              handleChangeView('completed');
            } }
          >
            Concluídas
          </button>
        </div>
      </form>
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
