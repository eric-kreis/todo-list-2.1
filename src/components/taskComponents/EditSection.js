import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditSection extends Component {
  constructor() {
    super();

    this.editInput = React.createRef();
  }

  componentDidMount() {
    const { edit } = this.props;
    if (edit) {
      this.editInput.current.focus();
    }
  }

  render() {
    const {
      id: inputID,
      editText,
      handleToggleEdit,
      handleEditing,
      handleEditBack,
    } = this.props;

    return (
      <section className="form-floating mb-3">
        <input
          ref={ this.editInput }
          className="form-control"
          type="text"
          name="editText"
          value={ editText }
          placeholder="placeholder"
          onChange={ handleEditing }
          onKeyUp={ (e) => {
            if (e.key === 'Enter') {
              handleToggleEdit();
              handleEditBack(editText, inputID);
            }
          } }
          onBlur={ () => {
            handleToggleEdit();
            handleEditBack(editText, inputID);
          } }
        />
        <label>Escreva aqui para editar sua tarefa</label>
        <button
          onClick={ () => {
            handleToggleEdit();
            handleEditBack(editText, inputID);
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
  editText: PropTypes.string.isRequired,
  handleToggleEdit: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
  handleEditBack: PropTypes.func.isRequired,
};

export default EditSection;
