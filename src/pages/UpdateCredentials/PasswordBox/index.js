/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import PasswordInput from '../../../components/PasswordInput';

const validClass = 'form-control';
const invalidClass = 'form-control is-invalid';

export default function PassowrdBox({
  passwordValue,
  confirmValue,
  passwordClass,
  confirmPasswordClass,
  handleValidatePassword,
  handleValidateConfirm,
  setPasswordClass,
  setConfirmPasswordClass,
}) {
  return (
    <section>
      <PasswordInput
        name="sign-pass"
        value={passwordValue}
        className={passwordClass}
        onChange={handleValidatePassword}
        onBlur={() => {
          setPasswordClass((prevClass) => {
            if (!passwordValue && (prevClass === invalidClass)) return validClass;
            return prevClass;
          });

          setConfirmPasswordClass((prevClass) => {
            if ((!passwordValue && !confirmValue) && (prevClass === invalidClass)) {
              return validClass;
            }
            return prevClass;
          });
        }}
      >
        { (passwordClass === 'form-control')
          ? 'Senha'
          : 'Digite uma senha válida' }
      </PasswordInput>
      <PasswordInput
        name="sign-confirm"
        value={confirmValue}
        className={confirmPasswordClass}
        onChange={handleValidateConfirm}
        onBlur={() => {
          setConfirmPasswordClass((prevClass) => {
            if ((!passwordValue && !confirmValue) && (prevClass === invalidClass)) {
              return validClass;
            }
            return prevClass;
          });
        }}
      >
        { (confirmPasswordClass === 'form-control')
          ? 'Confirme sua senha' : 'As senhas não coincidem' }
      </PasswordInput>
    </section>
  );
}

PassowrdBox.propTypes = {
  passwordValue: PropTypes.string.isRequired,
  confirmValue: PropTypes.string.isRequired,
  passwordClass: PropTypes.string.isRequired,
  confirmPasswordClass: PropTypes.string.isRequired,
  handleValidatePassword: PropTypes.func.isRequired,
  handleValidateConfirm: PropTypes.func.isRequired,
  setPasswordClass: PropTypes.func.isRequired,
  setConfirmPasswordClass: PropTypes.func.isRequired,
};
