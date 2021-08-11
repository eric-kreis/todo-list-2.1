/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';

import { ModalWindowS } from '../../../styles/ModalWindowS';
import PasswordsSection from './PasswordsSection';
import { SignUpContainerS, SignUpFormS, SubmitButton } from './styles';

const validClass = 'form-control';
const invalidClass = 'form-control is-invalid';

export default function SignUpModal() {
  const emailInput = useRef();

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  const [newUserInfo, setNewUserInfo] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [emailClass, setEmailClass] = useState(validClass);
  const [passwordClass, setPasswordClass] = useState(validClass);
  const [repeatPasswordClass, setRepeatPasswordClass] = useState(validClass);

  const [validated, setValidated] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setNewUserInfo({ ...newUserInfo, [name]: value });
  };

  // Email validation;
  const validateEmail = (email) => {
    const emailPattern = /\S+@\S+\.\S+/;
    if (emailPattern.test(email)) {
      setEmailClass(validClass);
      return true;
    }
    setEmailClass(invalidClass);
    return false;
  };

  const handleValidateEmail = ({ target: { value } }) => validateEmail(value);

  // Password validation;
  const validatePassword = (password) => {
    const { repeatPassword } = newUserInfo;
    if (password.trim()) {
      setPasswordClass(validClass);
      if (password === repeatPassword) {
        setRepeatPasswordClass(validClass);
        return true;
      }
      setRepeatPasswordClass(invalidClass);
      return false;
    }
    setPasswordClass(invalidClass);
    return false;
  };

  const handleValidatePassword = ({ target: { value } }) => validatePassword(value);

  // Repeat password validation;
  const validateRepeat = (repeatPassword) => {
    const { password } = newUserInfo;
    if (repeatPassword === password && repeatPassword.trim()) {
      setRepeatPasswordClass(validClass);
      return true;
    }
    setRepeatPasswordClass(invalidClass);
    return false;
  };

  const handleValidateRepeat = ({ target: { value } }) => validateRepeat(value);

  const handleSubmit = () => {
    Object.keys(newUserInfo).forEach((userInfo) => {
      const value = newUserInfo[userInfo];
      switch (userInfo) {
      case 'email':
        validateEmail(value);
        if (validateEmail(value)) {
          setValidated(true);
          break;
        }
        setValidated(false);
        break;
      case 'password':
        validatePassword(value);
        if (validatePassword(value)) {
          setValidated(true);
          break;
        }
        setValidated(false);
        break;
      case 'repeatPassword':
        validateRepeat(value);
        if (validateRepeat(value)) {
          setValidated(true);
          break;
        }
        setValidated(false);
        break;
      default:
        break;
      }
    });
  };

  console.log(validated);

  return (
    <ModalWindowS>
      <SignUpContainerS>
        <h4>CRIE SUA CONTA</h4>
        <SignUpFormS onSubmit={ (e) => e.preventDefault() }>
          <div className="form-floating">
            <input
              ref={ emailInput }
              type="text"
              name="email"
              value={ newUserInfo.email }
              className={ emailClass }
              placeholder="placeholder"
              onChange={ (e) => {
                handleChange(e);
                handleValidateEmail(e);
              } }
            />
            <label>
              { emailClass === validClass ? 'E-mail' : 'Digite um e-mail válido' }
            </label>
          </div>
          <PasswordsSection
            newUserInfo={ newUserInfo }
            passwordClass={ passwordClass }
            repeatPasswordClass={ repeatPasswordClass }
            handleChange={ handleChange }
            handleValidatePassword={ handleValidatePassword }
            handleValidateRepeat={ handleValidateRepeat }
          />
          <SubmitButton
            type="submit"
            onClick={ () => {
              handleSubmit();
            } }
          >
            Cadastre-se
          </SubmitButton>
        </SignUpFormS>
      </SignUpContainerS>
    </ModalWindowS>
  );
}
