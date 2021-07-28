import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import changeColor from '../../../redux/reducers/changeTheme/actions/changeColor';

import {
  ColorsContainerS,
  ModalWindowS,
  ColorButtonS,
  ColorButtonsContainerS,
} from './styles';

class ColorModal extends Component {
  render() {
    const { handleToggleModal, colorModal, changeColor: handleChangeColor } = this.props;

    return (colorModal
      && (
        <ModalWindowS>
          <ColorsContainerS>
            <ColorButtonsContainerS>
              <ColorButtonS onClick={ handleChangeColor } color="#5099C6" value="blue" />
              <ColorButtonS onClick={ handleChangeColor } color="#68B684" value="green" />
              <ColorButtonS onClick={ handleChangeColor } color="#EDACBD" value="pink" />
              <ColorButtonS onClick={ handleChangeColor } color="#E0AAFF" value="purple" />
              <ColorButtonS onClick={ handleChangeColor } color="#C4CBD1" value="white" />
              <ColorButtonS onClick={ handleChangeColor } color="#AE3231" value="red" />
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

const mapDispatchToProps = { changeColor };

export default connect(null, mapDispatchToProps)(ColorModal);
