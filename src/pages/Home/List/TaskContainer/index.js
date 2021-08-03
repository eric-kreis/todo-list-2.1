import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EditSection from './EditSection';
import TaskBody from './TaskBody';
import ItemS from './styles';

export default function TaskContainer({ id, text }) {
  const [editStatus, setEditStatus] = useState({
    edit: false,
    editText: text,
  });

  const editRules = () => {
    const { edit, editText } = editStatus;
    if (!edit && !editText) {
      setEditStatus({ ...editStatus, editText: text });
    }
  };

  const handleToggleEdit = () => {
    const { edit } = editStatus;
    setEditStatus({ ...editStatus, edit: !edit });
    editRules();
  };

  const handleEditing = ({ target }) => {
    const { name, value } = target;
    setEditStatus({ ...editStatus, [name]: value });
  };

  return (
    <ItemS>
      { !editStatus.edit
        ? (
          <TaskBody
            id={ id }
            text={ text }
            handleToggleEdit={ handleToggleEdit }
          />
        )
        : (
          <EditSection
            id={ id }
            edit={ editStatus.edit }
            editText={ editStatus.editText }
            handleToggleEdit={ handleToggleEdit }
            handleEditing={ handleEditing }
          />
        ) }
    </ItemS>
  );
}

TaskContainer.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
