import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      message = "Sem tarefas para remover";
      confirmButtons = false;
    } else if (tasks.length === checkedItems.length && show === 'toDo') {
      message = "Sem tarefas pendentes";
      confirmButtons = false;
    } else if (checkedItems.length === 0 && show === 'completed') {
      message = "Sem tarefas concluídas";
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

ClearModalContainer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  show: PropTypes.string.isRequired,
  clearModal: PropTypes.bool.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default ClearModalContainer;
