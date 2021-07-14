import React, { Component } from 'react';

import ConfirmModal from './ConfirmModal';
class ClearModalContainer extends Component {
  render() {
    const {
      show,
      clearModal,
      handleClear,
      handleToggleModal,
    } = this.props;

    let typeMessage = 'todas as tarefas' ;

    if (show === 'toDo') typeMessage = 'as tarefas pendentes';
    if (show === 'completed') typeMessage = 'as tarefas concluídas';

    return (
      <ConfirmModal
        openModal={ clearModal }
        handleConfirm={ () => { handleClear(); handleToggleModal('clear'); } }
        handleCancel={ () => { handleToggleModal('clear'); } }
      >
        Você realmente deseja remover {typeMessage}?
      </ConfirmModal>
    );
  }
}

export default ClearModalContainer;
