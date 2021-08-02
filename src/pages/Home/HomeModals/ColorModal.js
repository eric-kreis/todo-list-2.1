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
    const { handleToggleModal, colorModal, handleChangeColor } = this.props;

    return (colorModal
      && (
        <ModalWindowS data-testid="color-modal">
          <ColorsContainerS>
            <ColorButtonsContainerS>
              <ColorButtonS
                onClick={ handleChangeColor }
                color="#5099C6"
                value="blue"
                title="Azul"
              />
              <ColorButtonS
                onClick={ handleChangeColor }
                color="#68B684"
                value="green"
                title="Verde"
              />
              <ColorButtonS
                onClick={ handleChangeColor }
                color="#EDACBD"
                value="pink"
                title="Rosa"
              />
              <ColorButtonS
                onClick={ handleChangeColor }
                color="#E0AAFF"
                value="purple"
                title="Roxo"
              />
              <ColorButtonS
                onClick={ handleChangeColor }
                color="#C4CBD1"
                value="white"
                title="Branco"
              />
              <ColorButtonS
                onClick={ handleChangeColor }
                color="#AE3231"
                value="red"
                title="Vermelho"
              />
            </ColorButtonsContainerS>
            <button
              onClick={ () => { handleToggleModal('color'); } }
              className="modal-button"
              data-testid="return-color-modal"
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
  handleChangeColor: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleChangeColor: (e) => dispatch(changeColor(e)),
});

export default connect(null, mapDispatchToProps)(ColorModal);
