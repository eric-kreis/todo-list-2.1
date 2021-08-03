import React from 'react';
import PropTypes from 'prop-types';

import { ModalWindowS, ModalS } from './styles';

function ConfirmModal({
  openModal,
  handleConfirm,
  handleCancel,
  children,
  confirmButtons,
}) {
  return (openModal && (
    <ModalWindowS data-testid="confirm-modal">
      <ModalS>
        <h4>{ children }</h4>
        { confirmButtons
          ? (
            <div>
              <button
                type="button"
                onClick={ handleConfirm }
                data-testid="confirm-btn"
              >
                SIM
              </button>
              <button
                type="button"
                onClick={ handleCancel }
                data-testid="decline-btn"
              >
                NÃO
              </button>
            </div>
          ) : (
            <div>
              <button
                type="button"
                onClick={ handleCancel }
                data-testid="return-confirm-modal"
              >
                VOLTAR
              </button>
            </div>
          )}
      </ModalS>
    </ModalWindowS>
  ));
}

ConfirmModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  confirmButtons: PropTypes.bool.isRequired,
};

export default ConfirmModal;
