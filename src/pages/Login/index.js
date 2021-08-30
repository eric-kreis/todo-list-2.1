import React, { useState, useMemo, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../Contexts/AuthContext';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import {
  AuthBodyS,
  AuthContainerS,
  AuthFormS,
  SubmitButtonS,
} from '../../styles/auth';
import AuthHeader from '../../components/AuthHeader';
import LoginLoading from '../../assets/loadingComponents/LoginLoading';

const validClass = 'form-control';
const invalidClass = 'form-control is-invalid';

export default function Login() {
  const { login, currentUser } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailClass, setEmailClass] = useState(validClass);
  const [passwordClass, setPasswordClass] = useState(validClass);
  const [validated, setValidated] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const inputClasses = useMemo(() => (
    [emailClass, passwordClass]
  ), [emailClass, passwordClass]);

  const emailValidation = (value) => {
    const emailPattern = /\S+@\S+\.\S+/;
    if (emailPattern.test(value)) return setEmailClass(validClass);
    return setEmailClass(invalidClass);
  };

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
    emailValidation(value);
  };

  const passwordValidation = (value) => {
    if (value.trim()) return setPasswordClass(validClass);
    return setPasswordClass(invalidClass);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
    passwordValidation(value);
  };

  useEffect(() => {
    const allValidated = inputClasses.every((inputClass) => inputClass === validClass);
    setValidated(allValidated);
  }, [inputClasses]);

  const handleSubmit = async () => {
    emailValidation(email);
    passwordValidation(password);

    if (email && password && validated) {
      try {
        setLoading(true);
        setError('');
        await login(email, password);
      } catch (loginError) {
        switch (loginError.code) {
          case 'auth/wrong-password':
            setError('* Senha incorreta');
            break;
          case 'auth/too-many-requests':
            setError('* Muitas tentativas, conta desativada temporariamente');
            break;
          case 'auth/user-not-found':
            setError('* E-mail inválido');
            break;
          default:
            setError('* Falha ao entrar');
            break;
        }
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    (() => currentUser && history.push('/'))();
  }, [currentUser, history]);

  return (
    <AuthBodyS>
      <AuthContainerS>
        <AuthHeader>LOGIN</AuthHeader>
        { loading ? <LoginLoading />
          : (
            <AuthFormS onSubmit={(e) => e.preventDefault()} login>
              { error && <p className="error">{ error }</p> }
              <div>
                <EmailInput
                  name="login"
                  value={email}
                  className={emailClass}
                  onChange={handleChangeEmail}
                >
                  { emailClass === validClass ? 'E-mail' : 'Digite um e-mail válido' }
                </EmailInput>
                <PasswordInput
                  name="login"
                  value={password}
                  className={passwordClass}
                  onChange={handleChangePassword}
                >
                  { passwordClass === validClass ? 'Senha' : 'Digite uma senha válida' }
                </PasswordInput>
              </div>
              <SubmitButtonS
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
              >
                Entrar
              </SubmitButtonS>
              <p>
                {'Não tem uma conta? '}
                <Link to="/register">Cadastre-se</Link>
              </p>
            </AuthFormS>
          ) }
      </AuthContainerS>
    </AuthBodyS>
  );
}
