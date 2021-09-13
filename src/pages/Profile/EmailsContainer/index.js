import React from 'react';
import { useAuth } from '../../../Contexts/AuthContext';
import { decode, getStorage } from '../../../helpers';
import EmailsContainerS from './styles';

export default function EmailsContainer() {
  const { currentUser } = useAuth();

  return (
    <EmailsContainerS>
      <p>
        Email atual:
        <strong>{` ${currentUser.email}`}</strong>
      </p>
      <hr />
      <ul>
        <p>Últimos acessos neste dispositivo: </p>
        { getStorage('loggedEmails')
          .map((savedEmail) => {
            const emailProvider = decode(savedEmail).split('@')[1];
            return (
              <li key={savedEmail}>
                {`${decode(savedEmail).substr(0, 3)}...@${emailProvider}`}
              </li>
            );
          }) }
      </ul>
      <hr />
    </EmailsContainerS>
  );
}
