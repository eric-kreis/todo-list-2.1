import React, { Component } from 'react';

class EditInputSection extends Component {
  constructor() {
    super();

    this.editInput = React.createRef();
  }

  componentDidMount() {
    const { edit, mainInputFocus } = this.props;
    if (edit && !mainInputFocus) {
      this.editInput.current.focus();
    }
  }

  render() {
    const {
      id: inputID,
      taskText,
      handleToggle,
      handleEditing,
      handleRemoveFocus,
      handleEditBack,
    } = this.props;

    return (
      <section>
        <div>
          <input
            ref={ this.editInput }
            type="text"
            name="taskText"
            value={ taskText }
            placeholder="placeholder"
            onChange={ (e) => {
              handleRemoveFocus();
              handleEditing(e);
            } }
            onBlur={ () => {
              handleToggle();
              handleEditBack(taskText, inputID);
            } }
          />
          <label>Escreva aqui para editar sua tarefa</label>
        </div>
        <button
          onClick={ () => {
            handleToggle();
            handleEditBack(taskText, inputID);
            handleRemoveFocus();
          } }
        >
          Voltar
        </button>
      </section>
    );
  }
}

export default EditInputSection;
