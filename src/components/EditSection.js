import React, { Component } from 'react';

class EditSection extends Component {
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
              handleRemoveFocus();
              handleToggle();
              handleEditBack(taskText, inputID);
            } }
          />
          <label>Escreva aqui para editar sua tarefa</label>
          <button
            onClick={ () => {
              handleRemoveFocus();
              handleToggle();
              handleEditBack(taskText, inputID);
            } }
          >
            Voltar
          </button>
        </div>
      </section>
    );
  }
}

export default EditSection;
