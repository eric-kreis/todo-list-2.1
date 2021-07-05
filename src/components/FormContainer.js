import React from 'react';
import Input from './FormInput';

class FormContainer extends React.Component {
  render() {
    const {
      taskText,
      handleAddTask,
      handleChange,
      handleClear,
    } = this.props;

    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <Input
          name="taskText"
          value={ taskText }
          handleChange={ handleChange }
        >
          Digite sua tarefa aqui
        </Input>
        <button onClick={ handleAddTask }>Add task</button>
        <button onClick={ handleClear }>Clear</button>
      </form>
    )
  }
}

export default FormContainer;
