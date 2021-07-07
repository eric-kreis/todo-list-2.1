import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      handleToggleEdit,
      handleEditing,
      handleEditBack,
    } = this.props;

    return (
      <section className="">
        <input
          ref={ this.editInput }
          type="text"
          name="taskText"
          value={ taskText }
          placeholder="placeholder"
          onChange={ handleEditing }
          onKeyUp={ (e) => {
            if (e.key === 'Enter') {
              handleToggleEdit();
              handleEditBack(taskText, inputID);
            }
          } }
          onBlur={ () => {
            handleToggleEdit();
            handleEditBack(taskText, inputID);
          } }
        />
        <label>Escreva aqui para editar sua tarefa</label>
        <button
          onClick={ () => {
            handleToggleEdit();
            handleEditBack(taskText, inputID);
          } }
        >
          Voltar
        </button>
      </section>
    );
  }
}

EditSection.propTypes = {
  id: PropTypes.number.isRequired,
  taskText: PropTypes.string.isRequired,
  handleToggleEdit: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
  handleEditBack: PropTypes.func.isRequired,
};

export default EditSection;
