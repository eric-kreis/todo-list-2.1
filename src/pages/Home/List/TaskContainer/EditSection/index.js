import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import editBack from '../../../../../redux/reducers/listState/actions/editBack';

import { Exit } from '../../../../../assets/icons';
import { EditInputSection, ReturnButton } from './styles';

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
      id,
      editText,
      editBack,
      handleToggleEdit,
      handleEditing,
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
              editBack(editText, id);
            }
          } }
          onBlur={ () => {
            handleToggleEdit();
            editBack(editText, id);
          } }
          maxLength={ 120 }
        />
        <label>Escreva para editar sua tarefa</label>
        <ReturnButton
          onClick={ () => {
            handleToggleEdit();
            editBack(editText, id);
          } }
        >
          <Exit title="Voltar" />
        </ReturnButton>
      </EditInputSection>
    );
  }
}

const mapDispatchToProps = { editBack };

EditSection.propTypes = {
  id: PropTypes.number.isRequired,
  editText: PropTypes.string.isRequired,
  editBack: PropTypes.func.isRequired,
  handleToggleEdit: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(EditSection);
