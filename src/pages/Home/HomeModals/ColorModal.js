import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import changeColor from '../../../redux/reducers/changeTheme/actions/changeColor';

import {
  ColorsContainerS,
  ModalWindowS,
  ColorButtonS,
  ColorButtonsContainerS,
} from './styles';

export default function ColorModal({ handleToggleModal, colorModal }) {
  const dispatch = useDispatch();

  const handleChangeColor = useCallback((e) => (
    dispatch(changeColor(e))), [dispatch]);

  return (colorModal
    && (
      <ModalWindowS>
        <ColorsContainerS>
          <ColorButtonsContainerS>
            <ColorButtonS
              onClick={ handleChangeColor }
              value="blue"
              title="Azul"
            />
            <ColorButtonS
              onClick={ handleChangeColor }
              value="green"
              title="Verde"
            />
            <ColorButtonS
              onClick={ handleChangeColor }
              value="pink"
              title="Rosa"
            />
            <ColorButtonS
              onClick={ handleChangeColor }
              value="purple"
              title="Roxo"
            />
            <ColorButtonS
              onClick={ handleChangeColor }
              value="white"
              title="Branco"
            />
            <ColorButtonS
              onClick={ handleChangeColor }
              value="red"
              title="Vermelho"
            />
          </ColorButtonsContainerS>
          <button
            type="button"
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

ColorModal.propTypes = {
  colorModal: PropTypes.bool.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
