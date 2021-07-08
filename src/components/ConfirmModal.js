import React, { Component } from 'react';

import { ModalWindow, Modal } from '../styles/styledComponents';
class ConfirmModal extends Component {
  render() {
    const {
      show,
      openModal,
      handleClear,
      handleToggleModal,
    } = this.props;

    let typeMessage = 'todas as tarefas' ;

    if (show === 'toDo') typeMessage = 'as tarefas pendentes';
    if (show === 'completed') typeMessage = 'as tarefas concluídas';

    return (openModal) 
      ? 
        (
          <ModalWindow backgroundColor='gray'>
            <Modal>
              <h1>Você realmente deseja apagar {typeMessage}?</h1>
              <button onClick={ () => { handleClear(); handleToggleModal() } } >SIM</button>
              <button onClick={ handleToggleModal }>NÃO</button>
            </Modal>
          </ModalWindow>
        )
      : null;
  }
}

export default ConfirmModal;
