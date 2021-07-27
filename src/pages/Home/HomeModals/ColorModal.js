import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ColorsContainerS,
  ModalWindowS,
  ColorButtonS,
  ColorButtonsContainerS,
} from './styles';

class ColorModal extends Component {
  render() {
    const { handleToggleModal, colorModal, changeColor } = this.props;

    return (colorModal
      && (
        <ModalWindowS>
          <ColorsContainerS>
            <ColorButtonsContainerS>
              <ColorButtonS onClick={ changeColor } color="#5099C6" value="blue" />
              <ColorButtonS onClick={ changeColor } color="#68B684" value="green" />
              <ColorButtonS onClick={ changeColor } color="#EDACBD" value="pink" />
              <ColorButtonS onClick={ changeColor } color="#E0AAFF" value="purple" />
              <ColorButtonS onClick={ changeColor } color="#C4CBD1" value="white" />
              <ColorButtonS onClick={ changeColor } color="#AE3231" value="red" />
            </ColorButtonsContainerS>
            <button
              onClick={ () => { handleToggleModal('color'); } }
              className="modal-button"
            >
              VOLTAR
            </button>
          </ColorsContainerS>
        </ModalWindowS>
      )
    );
  }
}

ColorModal.propTypes = {
  colorModal: PropTypes.bool.isRequired,
  changeColor: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default ColorModal;
