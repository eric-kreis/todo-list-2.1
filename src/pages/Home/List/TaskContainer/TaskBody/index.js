import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import removeItem from '../../../../../redux/reducers/listState/actions/removeItem';

import TaskSection from './TaskSection';
import { TaskBodyS, TaskButtonS } from './styles';
import IconButtonS from '../../../../../styles/IconButtonS.styles';
import { Edit, Remove } from '../../../../../assets/icons';

export default function TaskBody({ id, text, handleToggleEdit }) {
  const dispatch = useDispatch();
  const handleRemoveItem = useCallback(() => (
    dispatch(removeItem(id))), [dispatch, id]);

  return (
    <TaskBodyS>
      <TaskSection
        id={ id }
      >
        { text }
      </TaskSection>
      <TaskButtonS>
        <IconButtonS
          medium
          onClick={ handleToggleEdit }
        >
          <Edit title="Editar tarefa" />
        </IconButtonS>
        <IconButtonS
          medium
          clear
          onClick={ handleRemoveItem }
        >
          <Remove title="Remover tarefa" />
        </IconButtonS>
      </TaskButtonS>
    </TaskBodyS>
  );
}

TaskBody.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  handleToggleEdit: PropTypes.func.isRequired,
};
