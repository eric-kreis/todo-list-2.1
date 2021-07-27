import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ConfirmModal from './ConfirmModal';
class ClearModalContainer extends Component {
  render() {
    const {
      display,
      tasks,
      checkedItems,
      clearModal,
      handleClear,
      handleToggleModal,
    } = this.props;

    let typeMessage = 'todas as tarefas' ;
    let confirmButtons = true;
    if (display === 'toDo') typeMessage = 'as tarefas pendentes';
    if (display === 'completed') typeMessage = 'as tarefas concluídas';

    let message = `Você realmente deseja remover ${typeMessage}?`

    if (tasks.length === 0) {
      message = "Sem tarefas para remover";
      confirmButtons = false;
    } else if (tasks.length === checkedItems.length && display === 'toDo') {
      message = "Sem tarefas pendentes";
      confirmButtons = false;
    } else if (checkedItems.length === 0 && display === 'completed') {
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

const mapStateToProps = ({ changeDisplay }) => ({ display: changeDisplay.display }); 

ClearModalContainer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  display: PropTypes.string.isRequired,
  clearModal: PropTypes.bool.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(ClearModalContainer);
