import React, { useState, useMemo, useEffect } from 'react';

import { useAuth } from '../../Contexts/AuthContext';
import SignUpModal from './SignUpModal';
import Header from '../../components/Header';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

const validClass = 'form-control';
const invalidClass = 'form-control is-invalid';

export default function Login() {
  const { login } = useAuth();

  const [signUpModal, setSignUpModal] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailClass, setEmailClass] = useState(validClass);
  const [passwordClass, setPasswordClass] = useState(validClass);

  const [submiting, setSubmiting] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const classes = useMemo(() => (
    [emailClass, passwordClass]
  ), [emailClass, passwordClass]);

  const emailValidation = (value) => {
    const emailPattern = /\S+@\S+\.\S+/;
    if (emailPattern.test(value)) return setEmailClass(validClass);
    setEmailClass(invalidClass);
  };

  const handleChangeEmail = ({ target: { value } }) => {
    setSubmiting(false);
    setEmail(value);
    emailValidation(value);
  };

  const passwordValidation = (value) => {
    if (value.trim()) return setPasswordClass(validClass);
    setPasswordClass(invalidClass);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setSubmiting(false);
    setPassword(value);
    passwordValidation(value);
  };

  const handleSubmit = () => {
    emailValidation(email);
    passwordValidation(password);
    setSubmiting(true);
  };

  useEffect(() => {
    const someInvalid = classes.some((inputClass) => inputClass === invalidClass);

    if (!someInvalid && submiting) {
      const loginUser = async () => {
        try {
          setLoading(true);
          setError('');
          await login(email, password);
        } catch (loginError) {
          setError('Falha ao entrar');
        }
        setLoading(false);
      };
      loginUser();
    }
  }, [classes, email, password, submiting, login]);

  return (
    <section>
      { signUpModal && <SignUpModal setSignUpModal={ setSignUpModal } /> }
      <Header>LISTA DE TAREFAS</Header>
      { error }
      <main>
        <form onSubmit={ (e) => e.preventDefault() }>
          <EmailInput
            name="login"
            value={ email }
            className={ emailClass }
            onChange={ handleChangeEmail }
          >
            { emailClass === validClass ? 'E-mail' : 'Digite um e-mail válido' }
          </EmailInput>
          <PasswordInput
            name="login"
            value={ password }
            className={ passwordClass }
            onChange={ handleChangePassword }
          >
            { passwordClass === validClass ? 'Senha' : 'Digite uma senha válida' }
          </PasswordInput>
          <button
            type="submit"
            onClick={ handleSubmit }
          >
            Entrar
          </button>
          <p>
            Ainda não tem uma conta?
            <button
              type="button"
              onClick={ () => setSignUpModal(true) }
              disabled={ loading }
            >
              { ' Clique aqui para criar!' }
            </button>
          </p>
        </form>
      </main>
    </section>
  );
}
