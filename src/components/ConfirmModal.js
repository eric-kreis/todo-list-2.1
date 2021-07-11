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
          <ModalWindow>
            <Modal>
              <h3>{ children }</h3>
              <button onClick={ handleConfirm } >SIM</button>
              <button onClick={ handleCancel } >NÃO</button>
            </Modal>
          </ModalWindow>
        )
      : null;
  }
}

export default ConfirmModal;
