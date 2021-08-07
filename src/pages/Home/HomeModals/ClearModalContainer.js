import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import clearAll from '../../../redux/reducers/listState/actions/clearAll';
import clearToDo from '../../../redux/reducers/listState/actions/clearToDo';
import clearDone from '../../../redux/reducers/listState/actions/clearDone';

import ConfirmModal from './ConfirmModal';

export default function ClearModalContainer({ clearModal, handleToggleModal }) {
  const dispatch = useDispatch();

  const handleClearAll = useCallback(() => dispatch(clearAll()), [dispatch]);
  const handleClearToDo = useCallback(() => dispatch(clearToDo()), [dispatch]);
  const handleClearDone = useCallback(() => dispatch(clearDone()), [dispatch]);

  const {
    display,
    tasks,
    checkedItems,
  } = useSelector(({ listState }) => listState);

  const handleClear = () => {
    if (display === 'toDo') {
      handleClearToDo();
    } else if (display === 'completed') {
      handleClearDone();
    } else { handleClearAll(); }
  };

  const displayMessage = () => {
    let typeMessage = 'todas as tarefas';
    let confirmButtons = true;

    if (display === 'toDo') typeMessage = 'as tarefas pendentes';
    if (display === 'completed') typeMessage = 'as tarefas concluídas';

    let message = `Você realmente deseja remover ${typeMessage}?`;

    if (tasks.length === 0) {
      message = 'Sem tarefas para remover';
      confirmButtons = false;
    } else if (tasks.length === checkedItems.length && display === 'toDo') {
      message = 'Sem tarefas pendentes';
      confirmButtons = false;
    } else if (checkedItems.length === 0 && display === 'completed') {
      message = 'Sem tarefas concluídas';
      confirmButtons = false;
    }

    return { message, confirmButtons };
  };

  const { message, confirmButtons } = displayMessage();

  return (
    <ConfirmModal
      confirmButtons={ confirmButtons }
      openModal={ clearModal }
      handleConfirm={ () => { handleClear(); handleToggleModal('clear'); } }
      handleCancel={ () => { handleToggleModal('clear'); } }
    >
      { message }
    </ConfirmModal>
  );
}

ClearModalContainer.propTypes = {
  clearModal: PropTypes.bool.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
