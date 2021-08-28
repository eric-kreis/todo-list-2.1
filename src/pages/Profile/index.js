import React from 'react';
import Logo from '../../assets/Logo';
import { useAuth } from '../../Contexts/AuthContext';
import ProfileBodyS from './styles';

export default function Profile() {
  const { currentUser } = useAuth();

  return (
    <ProfileBodyS>
      <div>
        <section className="photo-container">
          { currentUser.photoURL
            ? <img src={currentUser.photoURL} alt="Perfil" />
            : <Logo /> }
        </section>
        <input
          type="file"
          accept="image/png, image/jpeg"
        />
      </div>
    </ProfileBodyS>
  );
}
