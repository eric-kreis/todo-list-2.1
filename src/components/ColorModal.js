import React, { Component } from 'react';

import {
  Modal,
  ModalWindow,
  ColorButtons,
  ColorButtonsContainer,
} from '../styles/styledComponents';

class ColorModal extends Component {
  render() {
    const { toggleModal, colorModal, changeColor } = this.props;

    return (colorModal
      ? (
      <ModalWindow>
        <Modal>
          <ColorButtonsContainer>
            <ColorButtons onClick={ changeColor } color="#93A8D6" value="blue" />
            <ColorButtons onClick={ changeColor } color="#68B684" value="green" />
            <ColorButtons onClick={ changeColor } color="#EDACBD" value="pink" />
            <ColorButtons onClick={ changeColor } color="#C09FD8" value="purple" />
            <ColorButtons onClick={ changeColor } color="#C4CBD1" value="white" />
            <ColorButtons onClick={ changeColor } color="#FCEFB4" value="yellow" />
          </ColorButtonsContainer>
          <button onClick={ toggleModal }>Voltar</button>
        </Modal>
      </ModalWindow>) : null
    );
  }
}

export default ColorModal;