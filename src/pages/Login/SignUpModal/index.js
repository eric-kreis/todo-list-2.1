import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { useAuth } from '../../../Contexts/AuthContext';
import { ModalWindowS } from '../../../styles/ModalWindowS';
import EmailInput from '../EmailInput';
import PasswordsSection from './PasswordsSection';
import { SignUpContainerS, SignUpFormS, SubmitButtonS } from './styles';

const validClass = 'form-control';
const invalidClass = 'form-control is-invalid';

export default function SignUpModal({ setSignUpModal }) {
  const { signUp } = useAuth();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPassowordValue] = useState('');
  const [confirmValue, setConfirmValue] = useState('');

  const [emailClass, setEmailClass] = useState(validClass);
  const [passwordClass, setPasswordClass] = useState(validClass);
  const [confirmPasswordClass, setConfirmPasswordClass] = useState(validClass);
  const [validated, setValidated] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const inputClasses = useMemo(() => (
    [emailClass, passwordClass, confirmPasswordClass]
  ), [confirmPasswordClass, emailClass, passwordClass]);

  // Email functions;
  const emailValidation = (value) => {
    const emailPattern = /\S+@\S+\.\S+/;
    if (emailPattern.test(value)) {
      setEmailClass(validClass);
    } else {
      setEmailClass(invalidClass);
    }
  };

  const handleValidateEmail = ({ target: { value } }) => {
    setEmailValue(value);
    emailValidation(value);
  };

  // Password functions;
  const passwordValidation = (value) => {
    if (value.trim()) {
      setPasswordClass(validClass);
      if (value === confirmValue) {
        setConfirmPasswordClass(validClass);
      } else if (confirmValue) {
        setConfirmPasswordClass(invalidClass);
      }
    } else {
      setPasswordClass(invalidClass);
    }
  };

  const handleValidatePassword = ({ target: { value } }) => {
    setPassowordValue(value);
    passwordValidation(value);
  };

  // Confirm password functions;
  const confirmValidation = (value) => {
    if (value === passwordValue && value.trim()) {
      setConfirmPasswordClass(validClass);
    } else {
      setConfirmPasswordClass(invalidClass);
    }
  };

  const handleValidateConfirm = ({ target: { value } }) => {
    setConfirmValue(value);
    confirmValidation(value);
  };

  useEffect(() => {
    const allValidated = inputClasses.every((inputClass) => inputClass === validClass);
    setValidated(allValidated);
  }, [inputClasses]);

  const handleSubmit = async () => {
    emailValidation(emailValue);
    passwordValidation(passwordValue);
    confirmValidation(confirmValue);

    if (emailValue && passwordValue && confirmValue && validated) {
      try {
        setLoading(true);
        setError('');
        await signUp(emailValue, passwordValue);
      } catch (signError) {
        switch (signError.code) {
        case 'auth/email-already-in-use':
          setError('* O e-mail fornecido já está em uso');
          break;
        default:
          setError('* Falha ao criar a conta');
          break;
        }
      }
      setLoading(false);
    }
  };

  return (
    <ModalWindowS>
      <SignUpContainerS>
        <h4>CRIE SUA CONTA</h4>
        <SignUpFormS onSubmit={ (e) => e.preventDefault() }>
          { error && <p className="error">{ error }</p> }
          <EmailInput
            name="sign"
            value={ emailValue }
            className={ emailClass }
            onChange={ handleValidateEmail }
          >
            { emailClass === validClass ? 'E-mail' : 'Digite um e-mail válido' }
          </EmailInput>
          <PasswordsSection
            passwordValue={ passwordValue }
            confirmValue={ confirmValue }
            passwordClass={ passwordClass }
            confirmPasswordClass={ confirmPasswordClass }
            handleValidatePassword={ handleValidatePassword }
            handleValidateConfirm={ handleValidateConfirm }
          />
          <SubmitButtonS
            type="submit"
            onClick={ handleSubmit }
            disabled={ loading }
          >
            Cadastre-se
          </SubmitButtonS>
          <p>
            {'Já tem uma conta? '}
            <button type="button" onClick={ () => setSignUpModal(false) }>
              Entrar
            </button>
          </p>
        </SignUpFormS>
      </SignUpContainerS>
    </ModalWindowS>
  );
}

SignUpModal.propTypes = {
  setSignUpModal: PropTypes.func.isRequired,
};
