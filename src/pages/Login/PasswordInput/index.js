import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { EyeOff, EyeOn } from '../../../assets/icons';
import { PasswordContainerS, PasswordButtonS } from './styles';

export default function PasswordInput({
  value,
  name,
  className,
  onChange,
  children,
}) {
  const input = useRef();
  const [icon, setIcon] = useState('on');

  const handleToggleType = () => (
    input.current.type === 'password'
      ? input.current.setAttribute('type', 'text')
      : input.current.setAttribute('type', 'password')
  );

  const changeIcon = () => setIcon((prevIcon) => (
    prevIcon === 'on'
      ? 'off'
      : 'on'
  ));

  return (
    <PasswordContainerS className="form-floating">
      <input
        ref={ input }
        id={ `password-${name}` }
        type="password"
        name={ name }
        value={ value }
        className={ className }
        placeholder=" "
        onChange={ onChange }
        maxLength={ 40 }
      />
      <label htmlFor={ `password-${name}` }>{ children }</label>
      <PasswordButtonS
        type="button"
        onClick={ () => { handleToggleType(); changeIcon(); } }
      >
        { icon === 'on' ? <EyeOn /> : <EyeOff /> }
      </PasswordButtonS>
    </PasswordContainerS>
  );
}

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
