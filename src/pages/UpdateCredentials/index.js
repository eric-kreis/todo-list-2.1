import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { ThemeContext } from 'styled-components';

import { useAuth } from '../../Contexts/AuthContext';
import { database } from '../../firebase';

import PasswordBox from './PasswordBox';
import EmailBox from './EmailBox';
import SelectBox from './SelectBox';
import ButtonContainerS from './styles';

import AuthHeader from '../../components/AuthHeader';
import {
  AuthBodyS,
  AuthContainerS,
  AuthFormS,
} from '../../styles/auth';

const validClass = 'form-control';
const invalidClass = 'form-control is-invalid';

export default function UpdateCredentials() {
  const history = useHistory();
  const { title } = useContext(ThemeContext);
  const { updateEmail, updatePassword, currentUser } = useAuth();

  const [view, setView] = useState('select');

  const [emailValue, setEmailValue] = useState(currentUser.email);
  const [passwordValue, setPassowordValue] = useState('');
  const [confirmValue, setConfirmValue] = useState('');

  const [emailClass, setEmailClass] = useState(validClass);
  const [passwordClass, setPasswordClass] = useState(validClass);
  const [confirmPasswordClass, setConfirmPasswordClass] = useState(validClass);

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

  const changeEmail = async () => {
    if (emailClass === validClass && emailValue !== currentUser.email) {
      await toast.promise(
        updateEmail(emailValue),
        {
          pending: {
            render() { return 'Alterando email...'; },
            theme: title,
          },
          success: {
            render() { return 'Email atualizado com sucesso!'; },
            theme: title,
          },
          error: {
            render({ data }) {
              switch (data.code) {
                case 'auth/requires-recent-login':
                  return 'Faça login novamente para alterar esta informação';
                case 'auth/email-already-in-use':
                  return 'Falha ao atualizar, este email já está em uso';
                default:
                  return 'Falha ao atualizar o email';
              }
            },
            theme: title,
          },
        },
      );

      setView('select');

      database.users.doc(currentUser.uid).update({
        currentEmail: currentUser.email,
      });
    }
  };

  const changePassword = async () => {
    if (passwordValue === confirmValue) {
      passwordValidation(passwordValue);
      confirmValidation(confirmValue);

      await toast.promise(
        updatePassword(confirmValue),
        {
          pending: {
            render() { return 'Alterando senha...'; },
            theme: title,
          },
          success: {
            render() { return 'Senha atualizada com sucesso!'; },
            theme: title,
          },
          error: {
            render({ data }) {
              switch (data.code) {
                case 'auth/weak-password':
                  return 'Sua senha deve conter pelo menos 6 caracteres';
                case 'auth/requires-recent-login':
                  return 'Faça login novamente para alterar esta informação';
                default:
                  return 'Falha ao atualizar a senha';
              }
            },
            theme: title,
          },
        },
      );
      setView('select');
    }
  };

  const handleSubmit = () => {
    if (view === 'email') changeEmail();
    if (view === 'password') changePassword();
  };

  const handleReturn = () => {
    if (view === 'email' || view === 'password') setView('select');
    if (view === 'select') history.push('/profile');
  };

  const handleChangeView = ({ target: { value } }) => setView(value);

  return (
    <AuthBodyS>
      <ToastContainer transition={Flip} />
      <AuthContainerS defaultH update>
        <AuthHeader>
          { view === 'select' && 'O que deseja alterar?' }
          { view === 'email' && 'Alterar email' }
          { view === 'password' && 'Alterar senha' }
        </AuthHeader>
        <AuthFormS onSubmit={(e) => e.preventDefault()} update>
          <div>
            { view === 'select' && <SelectBox handleChangeView={handleChangeView} />}
            { view === 'email' && (
              <EmailBox
                emailValue={emailValue}
                emailClass={emailClass}
                validClass={validClass}
                handleValidateEmail={handleValidateEmail}
              />
            ) }
            { view === 'password'
            && (
              <PasswordBox
                passwordValue={passwordValue}
                confirmValue={confirmValue}
                passwordClass={passwordClass}
                confirmPasswordClass={confirmPasswordClass}
                handleValidatePassword={handleValidatePassword}
                handleValidateConfirm={handleValidateConfirm}
                setPasswordClass={setPasswordClass}
                setConfirmPasswordClass={setConfirmPasswordClass}
              />
            ) }
          </div>
          <ButtonContainerS>
            { view !== 'select' && (
              <button
                type="submit"
                className="link"
                onClick={handleSubmit}
                disabled={
                  view === 'email'
                    ? emailClass !== validClass
                    : (passwordClass !== validClass || confirmPasswordClass !== validClass)
                }
              >
                Atualizar
              </button>
            ) }
            <button type="button" className="link last" onClick={handleReturn}>
              Voltar
            </button>
          </ButtonContainerS>
        </AuthFormS>
      </AuthContainerS>
    </AuthBodyS>
  );
}
