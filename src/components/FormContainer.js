import React from 'react';
import FormInput from './FormInput';

class FormContainer extends React.Component {
  render() {
    const {
      taskText,
      mainInputFocus,
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
          handleChange={ handleChange }
          mainInputFocus={ mainInputFocus }
          handleFocus={ handleFocus }
        >
          Digite sua tarefa aqui
        </FormInput>
        <button onClick={ () => { handleAddTask(); handleFocus(); } }>Add task</button>
        <button onClick={ () => { handleClear(); handleRemoveFocus(); } }>Clear</button>
      </form>
    )
  }
}

export default FormContainer;
