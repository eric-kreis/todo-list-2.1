/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import PasswordInput from '../../PasswordInput';

export default function PasswordsSection({
  passwordValue,
  confirmValue,
  passwordClass,
  confirmPasswordClass,
  handleValidatePassword,
  handleValidateConfirm,
}) {
  return (
    <section>
      <PasswordInput
        name="password"
        value={ passwordValue }
        className={ passwordClass }
        onChange={ handleValidatePassword }
      >
        { (passwordClass === 'form-control')
          ? 'Senha'
          : 'Digite uma senha válida' }
      </PasswordInput>
      <PasswordInput
        name="confirm"
        value={ confirmValue }
        className={ confirmPasswordClass }
        onChange={ handleValidateConfirm }
      >
        { (confirmPasswordClass === 'form-control')
          ? 'Confirme sua senha' : 'As senhas não coincidem' }
      </PasswordInput>
    </section>
  );
}

PasswordsSection.propTypes = {
  passwordValue: PropTypes.string.isRequired,
  confirmValue: PropTypes.string.isRequired,
  passwordClass: PropTypes.string.isRequired,
  confirmPasswordClass: PropTypes.string.isRequired,
  handleValidatePassword: PropTypes.func.isRequired,
  handleValidateConfirm: PropTypes.func.isRequired,
};
