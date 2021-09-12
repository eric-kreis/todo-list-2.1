import React from 'react';
import { useAuth } from '../../../Contexts/AuthContext';
import { getStorage } from '../../../helpers';
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
        <p>Últimos logins neste dispositivo: </p>
        { getStorage('loggedEmails')
          .map((savedEmail) => {
            const emailProvider = savedEmail.split('@')[1];
            return (
              <li key={savedEmail}>
                {`${savedEmail.substr(0, 3)}...@${emailProvider}`}
              </li>
            );
          }) }
      </ul>
    </EmailsContainerS>
  );
}
