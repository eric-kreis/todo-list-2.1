import React from 'react';
import PropTypes from 'prop-types';
import SelectBoxS from './styles';

export default function SelectBox({ handleChangeView }) {
  return (
    <SelectBoxS>
      <button onClick={handleChangeView} type="button" value="email">
        EMAIL
      </button>
      <button onClick={handleChangeView} type="button" value="password">
        SENHA
      </button>
    </SelectBoxS>
  );
}

SelectBox.propTypes = {
  handleChangeView: PropTypes.func.isRequired,
};
