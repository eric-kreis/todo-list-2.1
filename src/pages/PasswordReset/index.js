import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ResetLoading from '../../assets/loadingComponents/ResetLoading';
import AuthHeader from '../../components/AuthHeader';
import EmailInput from '../../components/EmailInput';
import { useAuth } from '../../Contexts/AuthContext';
import {
  AuthBodyS,
  AuthContainerS,
  AuthFormS,
  SubmitButtonS,
} from '../../styles/auth';

const validClass = 'form-control';
const invalidClass = 'form-control is-invalid';

export default function PasswordReset() {
  const { resetPassword } = useAuth();

  const [email, setEmail] = useState('');
  const [emailClass, setEmailClass] = useState(validClass);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const [success, setSuccess] = useState('');

  const emailValidation = (value) => {
    const emailPattern = /\S+@\S+\.\S+/;
    if (emailPattern.test(value)) return setEmailClass(validClass);
    return setEmailClass(invalidClass);
  };

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
    emailValidation(value);
  };

  const handleSubmit = async () => {
    emailValidation(email);

    if (email && emailClass === validClass) {
      try {
        setLoading(true);
        setError('');
        setSuccess('');
        await resetPassword(email);
        setSuccess('Email enviado com sucesso');
      } catch (resetError) {
        switch (resetError.code) {
          case 'auth/user-not-found':
            setError('* Usuário não encontrado');
            break;
          default:
            setError('* Falha ao enviar');
            break;
        }
      }
      setLoading(false);
    }
  };

  return (
    <AuthBodyS>
      <AuthContainerS defaultH>
        <AuthHeader>RECUPERE SUA SENHA</AuthHeader>
        { loading ? <ResetLoading />
          : (
            <AuthFormS onSubmit={(e) => e.preventDefault()} login>
              { error && <p className="error">{ error }</p> }
              { success && <p className="success">{ success }</p> }
              <div>
                <EmailInput
                  name="login"
                  value={email}
                  className={emailClass}
                  onChange={handleChangeEmail}
                >
                  { emailClass === validClass ? 'E-mail' : 'Digite um e-mail válido' }
                </EmailInput>
              </div>
              <SubmitButtonS
                type="submit"
                onClick={handleSubmit}
                disabled={!email || emailClass !== validClass}
              >
                Enviar
              </SubmitButtonS>
              <div className="link-container">
                <Link to="/login">Entrar</Link>
                <p>
                  {'Não tem uma conta? '}
                  <Link to="/register">Cadastre-se</Link>
                </p>
              </div>
            </AuthFormS>
          ) }
      </AuthContainerS>
    </AuthBodyS>
  );
}
