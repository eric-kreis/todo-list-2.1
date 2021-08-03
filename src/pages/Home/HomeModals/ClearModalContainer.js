import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import clearAll from '../../../redux/reducers/listState/actions/clearAll';
import clearToDo from '../../../redux/reducers/listState/actions/clearToDo';
import clearDone from '../../../redux/reducers/listState/actions/clearDone';

import ConfirmModal from './ConfirmModal';

function ClearModalContainer({
  tasks,
  checkedItems,
  display,
  clearModal,
  handleClearAll,
  handleClearToDo,
  handleClearDone,
  handleToggleModal,
}) {
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

const mapStateToProps = ({ listState }) => ({
  display: listState.display,
  tasks: listState.tasks,
  checkedItems: listState.checkedItems,
});

const mapDispatchToProps = (dispatch) => ({
  handleClearAll: () => dispatch(clearAll()),
  handleClearToDo: () => dispatch(clearToDo()),
  handleClearDone: () => dispatch(clearDone()),
});

ClearModalContainer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  display: PropTypes.string.isRequired,
  clearModal: PropTypes.bool.isRequired,
  handleClearAll: PropTypes.func.isRequired,
  handleClearToDo: PropTypes.func.isRequired,
  handleClearDone: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearModalContainer);
