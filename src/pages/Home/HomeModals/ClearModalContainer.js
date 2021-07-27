import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import clearAll from '../../../redux/reducers/listState/actions/clearAll';
import clearToDo from '../../../redux/reducers/listState/actions/clearToDo';
import clearDone from '../../../redux/reducers/listState/actions/clearDone';

import ConfirmModal from './ConfirmModal';
class ClearModalContainer extends Component {
  constructor() {
    super();
    this.handleClear = this.handleClear.bind(this);
  }

  handleClear() {
    const {
      display,
      clearAll,
      clearToDo,
      clearDone,
    } = this.props;

    if (display === 'toDo'){
      clearToDo();
    } else if (display === 'completed') {
      clearDone();
    } else {
      clearAll();
    }
  }

  render() {
    const {
      display,
      tasks,
      checkedItems,
      clearModal,
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
        handleConfirm={ () => { this.handleClear(); handleToggleModal('clear'); } }
        handleCancel={ () => { handleToggleModal('clear'); } }
      >
        { message }
      </ConfirmModal>
    );
  }
}

const mapStateToProps = ({ changeDisplay, listState }) => ({
  display: changeDisplay.display,
  tasks: listState.tasks,
  checkedItems: listState.checkedItems,
});

const mapDispatchToProps = { clearAll, clearToDo, clearDone };

ClearModalContainer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  display: PropTypes.string.isRequired,
  clearModal: PropTypes.bool.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearModalContainer);
