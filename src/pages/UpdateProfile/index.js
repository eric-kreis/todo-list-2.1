import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../Contexts/AuthContext';
import AuthHeader from '../../components/AuthHeader';
import EmailInput from '../../components/EmailInput';
import PasswordsSection from './PasswordsSection';
import {
  AuthBodyS,
  AuthContainerS,
  AuthFormS,
  SubmitButtonS,
} from '../../styles/auth';
import UpdateLoading from '../../assets/loadingComponents/UpdateLoading';
import { database } from '../../firebase';

const validClass = 'form-control';
const invalidClass = 'form-control is-invalid';

export default function UpdateProfile() {
  const history = useHistory();
  const { updateEmail, updatePassword, currentUser } = useAuth();

  const [emailValue, setEmailValue] = useState(currentUser.email);
  const [passwordValue, setPassowordValue] = useState('');
  const [confirmValue, setConfirmValue] = useState('');

  const [emailClass, setEmailClass] = useState(validClass);
  const [passwordClass, setPasswordClass] = useState(validClass);
  const [confirmPasswordClass, setConfirmPasswordClass] = useState(validClass);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

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

  const handleSubmit = async () => {
    // eslint-disable-next-line max-len
    if (emailClass === validClass || ((passwordValue && confirmValue) || (!passwordValue && !confirmValue))) {
      const promises = [];
      if (currentUser.email !== emailValue) promises.push(updateEmail(emailValue));
      if (confirmValue) promises.push(updatePassword(confirmValue));

      try {
        setError('');
        setLoading(true);
        await Promise.all(promises);
        await database.users.doc(currentUser.uid).update({
          currentEmail: currentUser.email,
        });
        history.push('/');
      } catch (updateError) {
        switch (updateError.code) {
          case 'auth/weak-password':
            setError('* Sua senha deve conter pelo menos 6 caracteres');
            break;
          case 'auth/requires-recent-login':
            setError('* Faça login novamente para atualizar esta informação');
            break;
          case 'auth/email-already-in-use':
            setError('* Falha ao atualizar, este email já está em uso');
            break;
          default:
            setError('* Falha ao atualizar a conta');
            break;
        }
      }
      setLoading(false);
    }
  };

  return (
    <AuthBodyS>
      <AuthContainerS defaultH update>
        <AuthHeader>Atualizar Perfil</AuthHeader>
        { loading ? <UpdateLoading />
          : (
            <AuthFormS onSubmit={(e) => e.preventDefault()} update>
              { error && <p className="error">{ error }</p> }
              <div>
                <EmailInput
                  name="sign"
                  value={emailValue}
                  className={emailClass}
                  onChange={handleValidateEmail}
                >
                  { emailClass === validClass ? 'E-mail' : 'Digite um e-mail válido' }
                </EmailInput>
                <PasswordsSection
                  passwordValue={passwordValue}
                  confirmValue={confirmValue}
                  passwordClass={passwordClass}
                  confirmPasswordClass={confirmPasswordClass}
                  handleValidatePassword={handleValidatePassword}
                  handleValidateConfirm={handleValidateConfirm}
                  setPasswordClass={setPasswordClass}
                  setConfirmPasswordClass={setConfirmPasswordClass}
                />
              </div>
              <SubmitButtonS
                type="submit"
                onClick={handleSubmit}
                disabled={emailClass !== validClass}
              >
                Atualizar
              </SubmitButtonS>
              <div className="link-container">
                <p>
                  <Link to="/profile">Voltar</Link>
                </p>
              </div>
            </AuthFormS>
          ) }
      </AuthContainerS>
    </AuthBodyS>
  );
}
