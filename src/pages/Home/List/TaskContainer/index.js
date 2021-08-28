import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EditSection from './EditSection';
import TaskBody from './TaskBody';
import ItemS from './styles';

export default function TaskContainer({ id, text }) {
  const [editText, setEditText] = useState(text);
  const [editStatus, setEditStatus] = useState(false);

  const handleEditing = ({ target: { value } }) => {
    setEditText(value);
  };

  const editRules = () => {
    if (!editStatus && !editText) {
      setEditText(text);
    }
  };

  const handleToggleEdit = () => {
    setEditStatus(!editStatus);
    editRules();
  };

  return (
    <ItemS>
      { !editStatus
        ? (
          <TaskBody
            id={id}
            text={text}
            handleToggleEdit={handleToggleEdit}
          />
        )
        : (
          <EditSection
            id={id}
            editStatus={editStatus}
            editText={editText}
            handleToggleEdit={handleToggleEdit}
            handleEditing={handleEditing}
          />
        ) }
    </ItemS>
  );
}

TaskContainer.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
