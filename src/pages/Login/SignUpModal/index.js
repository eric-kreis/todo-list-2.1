import React, { useMemo, useState, useEffect } from 'react';

import { useAuth } from '../../../Contexts/AuthContext';
import { ModalWindowS } from '../../../styles/ModalWindowS';
import EmailInput from '../EmailInput';
import PasswordsSection from './PasswordsSection';
import { SignUpContainerS, SignUpFormS, SubmitButtonS } from './styles';

const validClass = 'form-control';
const invalidClass = 'form-control is-invalid';

export default function SignUpModal() {
  const { signUp } = useAuth();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPassowordValue] = useState('');
  const [confirmValue, setConfirmValue] = useState('');

  const [emailClass, setEmailClass] = useState(validClass);
  const [passwordClass, setPasswordClass] = useState(validClass);
  const [confirmPasswordClass, setConfirmPasswordClass] = useState(validClass);

  const [submiting, setSubmiting] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const classes = useMemo(() => (
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
    setSubmiting(false);
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
    setSubmiting(false);
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
    setSubmiting(false);
    setConfirmValue(value);
    confirmValidation(value);
  };

  const handleSubmit = () => {
    emailValidation(emailValue);
    passwordValidation(passwordValue);
    confirmValidation(confirmValue);
    setSubmiting(true);
  };

  useEffect(() => {
    const someInvalid = classes.some((inputClass) => {
      if (inputClass === invalidClass) return true;
      return false;
    });

    if (!someInvalid && submiting) {
      const creatingUser = async () => {
        try {
          setLoading(true);
          setError('');
          await signUp(emailValue, passwordValue);
        } catch (signError) {
          setError('Falha ao criar a conta');
        }
        setLoading(false);
      };
      creatingUser();
    }
  }, [classes, emailValue, passwordValue, signUp, submiting]);

  return (
    <ModalWindowS>
      <SignUpContainerS>
        <h4>CRIE SUA CONTA</h4>
        <SignUpFormS onSubmit={ (e) => e.preventDefault() }>
          { error && <h5>{ error }</h5> }
          <EmailInput
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
        </SignUpFormS>
      </SignUpContainerS>
    </ModalWindowS>
  );
}
