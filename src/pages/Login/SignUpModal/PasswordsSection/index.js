/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PasswordsSectionS, PasswordButtonS } from './styles';
import { EyeOff, EyeOn } from '../../../../assets/icons';

export default function PasswordsSection({
  newUserInfo,
  passwordClass,
  repeatPasswordClass,
  handleChange,
  handleValidatePassword,
  handleValidateRepeat,
}) {
  const [types, setTypes] = useState({
    password: 'password',
    repeatPassword: 'password',
  });

  const [viewIcons, setViewIcons] = useState({
    password: true,
    repeatPassword: true,
  });

  const handleToggleType = (name) => {
    if (types[name] === 'password') {
      setTypes({ ...types, [name]: 'text' });
    } else {
      setTypes({ ...types, [name]: 'password' });
    }
  };

  const changeEye = (name) => {
    setViewIcons({ ...viewIcons, [name]: !viewIcons[name] });
  };

  return (
    <PasswordsSectionS>
      <div className="form-floating">
        <input
          type={ types.password }
          name="password"
          value={ newUserInfo.password }
          className={ passwordClass }
          placeholder="placeholder"
          onChange={ (e) => {
            handleChange(e);
            handleValidatePassword(e);
          } }
          maxLength={ 40 }
        />
        <label>
          { (passwordClass === 'form-control')
            ? 'Digite sua senha senha'
            : 'Digite uma senha válida' }
        </label>
        <PasswordButtonS
          type="button"
          value="password"
          onClick={ () => {
            handleToggleType('password');
            changeEye('password');
          } }
        >
          {viewIcons.password ? <EyeOn /> : <EyeOff />}
        </PasswordButtonS>
      </div>
      <div className="form-floating">
        <input
          type={ types.repeatPassword }
          name="repeatPassword"
          value={ newUserInfo.repeatPassword }
          className={ repeatPasswordClass }
          placeholder="placeholder"
          onChange={ (e) => {
            handleChange(e);
            handleValidateRepeat(e);
          } }
          maxLength={ 40 }
        />
        <label>
          { (repeatPasswordClass === 'form-control')
            ? 'Digite a senha novamente' : 'As senhas não coincidem' }
        </label>
        <PasswordButtonS
          type="button"
          onClick={ () => {
            handleToggleType('repeatPassword');
            changeEye('repeatPassword');
          } }
        >
          {viewIcons.repeatPassword ? <EyeOn /> : <EyeOff />}
        </PasswordButtonS>
      </div>
    </PasswordsSectionS>
  );
}

PasswordsSection.propTypes = {
  newUserInfo: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    repeatPassword: PropTypes.string.isRequired,
  }).isRequired,
  passwordClass: PropTypes.string.isRequired,
  repeatPasswordClass: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleValidatePassword: PropTypes.func.isRequired,
  handleValidateRepeat: PropTypes.func.isRequired,
};
