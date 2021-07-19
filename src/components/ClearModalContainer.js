import React, { Component } from 'react';

import ConfirmModal from './ConfirmModal';
class ClearModalContainer extends Component {
  render() {
    const {
      tasks,
      checkedItems,
      show,
      clearModal,
      handleClear,
      handleToggleModal,
    } = this.props;

    let typeMessage = 'todas as tarefas' ;
    let confirmButtons = true;
    if (show === 'toDo') typeMessage = 'as tarefas pendentes';
    if (show === 'completed') typeMessage = 'as tarefas concluídas';

    let message = `Você realmente deseja remover ${typeMessage}?`

    if (tasks.length === 0) {
      message = "Você não tem tarefas para remover";
      confirmButtons = false;
    } else if (tasks.length === checkedItems.length && show === 'toDo') {
      message = "Você não tem nenhuma tarefa pendente para remover";
      confirmButtons = false;
    } else if (checkedItems.length === 0 && show === 'completed') {
      message = "Você não tem nenhuma tarefa concluída para remover";
      confirmButtons = false;
    }

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
}

export default ClearModalContainer;
