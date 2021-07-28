import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ModalWindowS, ModalS } from './styles';
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
        <ModalWindowS>
          <ModalS>
            <h4>{ children }</h4>
            { confirmButtons
            ? (
              <div>
                <button onClick={ handleConfirm }>SIM</button>
                <button onClick={ handleCancel }>NÃO</button>
              </div>

            ) : (
              <div>
                <button onClick={ handleCancel } >VOLTAR</button>
              </div>
            )}
          </ModalS>
        </ModalWindowS>
      )
    );
  }
}

ConfirmModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  confirmButtons: PropTypes.bool.isRequired,
};

export default ConfirmModal;
