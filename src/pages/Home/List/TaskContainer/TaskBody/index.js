import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useList } from '../../../../../Contexts/ListContext';
import TaskSection from './TaskSection';
import { TaskBodyS, TaskButtonS } from './styles';
import IconButtonS from '../../../../../styles/IconButtonS.styles';
import { Edit, Remove } from '../../../../../assets/icons';

export default function TaskBody({ id, text, handleToggleEdit }) {
  const { removeAndSaveToDo } = useList();
  const handleRemoveItem = useCallback(() => (
    removeAndSaveToDo(id)), [removeAndSaveToDo, id]);

  return (
    <TaskBodyS>
      <TaskSection id={id}>
        { text }
      </TaskSection>
      <TaskButtonS>
        <IconButtonS medium onClick={handleToggleEdit}>
          <Edit title="Editar tarefa" />
        </IconButtonS>
        <IconButtonS medium clear onClick={handleRemoveItem}>
          <Remove title="Remover tarefa" />
        </IconButtonS>
      </TaskButtonS>
    </TaskBodyS>
  );
}

TaskBody.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleToggleEdit: PropTypes.func.isRequired,
};
