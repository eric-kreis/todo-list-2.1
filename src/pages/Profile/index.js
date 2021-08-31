import React, { useState } from 'react';
import Logo from '../../assets/Logo';
import { useAuth } from '../../Contexts/AuthContext';
import { SubmitButtonS } from '../../styles/auth';
import ProfileBodyS from './styles';

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState('');

  const handleSignOut = async () => {
    try {
      setError('');
      await logout();
    } catch (logoutError) {
      setError('* Falha ao sair');
    }
  };

  return (
    <ProfileBodyS>
      <section className="profile-container">
        <section className="photo-container">
          { currentUser.photoURL
            ? <img src={currentUser.photoURL} alt="Perfil" />
            : <Logo /> }
        </section>
        <input
          type="file"
          accept="image/png, image/jpeg"
        />
        { error && <h4>{ error }</h4> }
        <SubmitButtonS onClick={handleSignOut}>Sair</SubmitButtonS>
      </section>
    </ProfileBodyS>
  );
}
