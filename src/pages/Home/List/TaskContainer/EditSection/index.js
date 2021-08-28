/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useList } from '../../../../../Contexts/ListContext';
import { Exit } from '../../../../../assets/icons';
import { EditInputSection, ReturnButton } from './styles';

export default function EditSection({
  id,
  editStatus,
  editText,
  handleToggleEdit,
  handleEditing,
}) {
  const { editingTasks } = useList();

  const handleEditBack = useCallback((text) => (
    editingTasks(text, id)), [editingTasks, id]);

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
        ref={editInput}
        className={editClass}
        type="text"
        name="editText"
        value={editText}
        placeholder=" "
        autoComplete="off"
        onChange={handleEditing}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleToggleEdit();
            handleEditBack(editText);
          }
        }}
        onBlur={() => {
          handleToggleEdit();
          handleEditBack(editText);
        }}
        maxLength={120}
      />
      <label>Escreva para editar sua tarefa</label>
      <ReturnButton
        onClick={() => {
          handleToggleEdit();
          handleEditBack(editText);
        }}
      >
        <Exit title="Voltar" />
      </ReturnButton>
    </EditInputSection>
  );
}

EditSection.propTypes = {
  id: PropTypes.string.isRequired,
  editStatus: PropTypes.bool.isRequired,
  editText: PropTypes.string.isRequired,
  handleToggleEdit: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
};
