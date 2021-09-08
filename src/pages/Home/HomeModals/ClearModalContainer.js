import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import ConfirmModal from './ConfirmModal';
import { useList } from '../../../Contexts/ListContext';

export default function ClearModalContainer({ clearModal, handleToggleModal }) {
  const {
    display,
    tasks,
    checkedItems,
    clearAll,
    clearToDo,
    clearDone,
  } = useList();

  const handleClearAll = useCallback(() => clearAll(), [clearAll]);
  const handleClearToDo = useCallback(() => clearToDo(), [clearToDo]);
  const handleClearDone = useCallback(() => clearDone(), [clearDone]);

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
      confirmButtons={confirmButtons}
      openModal={clearModal}
      handleConfirm={() => { handleClear(); handleToggleModal(); }}
      handleCancel={handleToggleModal}
    >
      { message }
    </ConfirmModal>
  );
}

ClearModalContainer.propTypes = {
  clearModal: PropTypes.bool.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
