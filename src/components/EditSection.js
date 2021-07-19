import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Exit } from '../icons/Icons';
import { EditInputSection, ReturnButton } from '../styles/styledComponents';

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

    let editClass = 'form-control';
    if (!editText) editClass = 'form-control is-invalid';

    return (
      <EditInputSection className="form-floating">
        <input
          ref={ this.editInput }
          className={ editClass }
          type="text"
          name="editText"
          value={ editText }
          placeholder="placeholder"
          autoComplete="off"
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
          maxLength={ 120 }
        />
        <label>Escreva para editar sua tarefa</label>
        <ReturnButton
          onClick={ () => {
            handleToggleEdit();
            handleEditBack(editText, inputID);
          } }
        >
          <Exit title="Voltar" />
        </ReturnButton>
      </EditInputSection>
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
