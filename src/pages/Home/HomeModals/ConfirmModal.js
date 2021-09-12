import React from 'react';
import PropTypes from 'prop-types';

import ModalWindowS from '../../../styles/ModalWindowS';
import ModalS from './styles';

export default function ConfirmModal({
  openModal,
  handleConfirm,
  handleCancel,
  children,
  confirmButtons,
}) {
  return (openModal && (
    <ModalWindowS>
      <ModalS>
        <h4>{ children }</h4>
        { confirmButtons
          ? (
            <div>
              <button type="button" onClick={handleConfirm}>
                SIM
              </button>
              <button type="button" onClick={handleCancel}>
                NÃO
              </button>
            </div>
          ) : (
            <div>
              <button type="button" onClick={handleCancel}>
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
