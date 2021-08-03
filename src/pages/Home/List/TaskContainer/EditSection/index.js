/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import editBack from '../../../../../redux/reducers/listState/actions/editBack';

import { Exit } from '../../../../../assets/icons';
import { EditInputSection, ReturnButton } from './styles';

function EditSection({
  id,
  editStatus,
  editText,
  handleEditBack,
  handleToggleEdit,
  handleEditing,
}) {
  const editInput = useRef(null);

  useEffect(() => {
    if (editStatus) {
      editInput.current.focus();
    }
  }, [editStatus]);

  const editClass = editText ? 'form-control' : 'form-control is-invalid';

  return (
    <EditInputSection className="form-floating">
      <input
        ref={ editInput }
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
            handleEditBack(editText, id);
          }
        } }
        onBlur={ () => {
          handleToggleEdit();
          handleEditBack(editText, id);
        } }
        maxLength={ 120 }
      />
      <label>Escreva para editar sua tarefa</label>
      <ReturnButton
        onClick={ () => {
          handleToggleEdit();
          handleEditBack(editText, id);
        } }
      >
        <Exit title="Voltar" />
      </ReturnButton>
    </EditInputSection>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleEditBack: (text, id) => dispatch(editBack(text, id)),
});

EditSection.propTypes = {
  id: PropTypes.number.isRequired,
  editStatus: PropTypes.bool.isRequired,
  editText: PropTypes.string.isRequired,
  handleEditBack: PropTypes.func.isRequired,
  handleToggleEdit: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(EditSection);
