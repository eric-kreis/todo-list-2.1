import React, { Component } from 'react';

import { ModalWindow, Modal } from '../styles/styledComponents';
class ConfirmModal extends Component {
  render() {
    const {
      openModal,
      handleConfirm,
      handleCancel,
      children,
    } = this.props;
    return (openModal)
      ? 
        (
          <ModalWindow backgroundColor='gray'>
            <Modal>
              <h1>{ children }</h1>
              <button onClick={ handleConfirm } >SIM</button>
              <button onClick={ handleCancel } >NÃO</button>
            </Modal>
          </ModalWindow>
        )
      : null;
  }
}

export default ConfirmModal;
