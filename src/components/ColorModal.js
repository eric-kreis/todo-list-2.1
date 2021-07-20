import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Color,
  ModalWindow,
  ColorButtons,
  ColorButtonsContainer,
} from '../styles/styledComponents';

class ColorModal extends Component {
  render() {
    const { handleToggleModal, colorModal, changeColor } = this.props;

    return (colorModal
      && (
        <ModalWindow>
          <Color>
            <ColorButtonsContainer>
              <ColorButtons onClick={ changeColor } color="#5099C6" value="blue" />
              <ColorButtons onClick={ changeColor } color="#68B684" value="green" />
              <ColorButtons onClick={ changeColor } color="#EDACBD" value="pink" />
              <ColorButtons onClick={ changeColor } color="#E0AAFF" value="purple" />
              <ColorButtons onClick={ changeColor } color="#C4CBD1" value="white" />
              <ColorButtons onClick={ changeColor } color="#AE3231" value="red" />
            </ColorButtonsContainer>
            <button
              onClick={ () => { handleToggleModal('color'); } }
              className="modal-button"
            >
              VOLTAR
            </button>
          </Color>
        </ModalWindow>
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
