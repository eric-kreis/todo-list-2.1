import React, { Component } from 'react';

import { ModalWindow, Modal } from '../styles/styledComponents';
class ConfirmModal extends Component {
  render() {
    const {
      openModal,
      handleConfirm,
      handleCancel,
      children,
      confirmButtons,
    } = this.props;
    return (openModal
      && (
        <ModalWindow>
          <Modal>
            <h4>{ children }</h4>
            { confirmButtons
            ? (
              <div>
                <button onClick={ handleConfirm }>Sim</button>
                <button onClick={ handleCancel }>Não</button>
              </div>

            ) : (
              <div>
                <button onClick={ handleCancel } >Voltar</button>
              </div>
            )}
          </Modal>
        </ModalWindow>
      )
    );
  }
}

export default ConfirmModal;
