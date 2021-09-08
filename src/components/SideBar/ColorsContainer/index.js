import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Creators as ThemeActions } from '../../../redux/reducers/changeTheme';
import {
  ColorsContainerS,
  ColorButtonS,
  ColorButtonsContainerS,
} from './styles';

export default function ColorModal() {
  const dispatch = useDispatch();

  const handleChangeColor = useCallback((e) => (
    dispatch(ThemeActions.changeColor(e))), [dispatch]);

  return (
    <ColorsContainerS className="colors-container">
      <ColorButtonsContainerS>
        <ColorButtonS
          onClick={handleChangeColor}
          value="blue"
          title="Azul"
        />
        <ColorButtonS
          onClick={handleChangeColor}
          value="green"
          title="Verde"
        />
        <ColorButtonS
          onClick={handleChangeColor}
          value="pink"
          title="Rosa"
        />
        <ColorButtonS
          onClick={handleChangeColor}
          value="purple"
          title="Roxo"
        />
        <ColorButtonS
          onClick={handleChangeColor}
          value="white"
          title="Branco"
        />
        <ColorButtonS
          onClick={handleChangeColor}
          value="red"
          title="Vermelho"
        />
      </ColorButtonsContainerS>
    </ColorsContainerS>
  );
}
