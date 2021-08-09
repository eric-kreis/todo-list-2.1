/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Header from '../../components/Header';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <section>
      <Header>LISTA DE TAREFAS</Header>
      <main>
        <form onSubmit={ (e) => e.preventDefault() }>
          <div className="form-floating">
            <input
              type="text"
              name="email"
              value={ credentials.email }
              className="form-control"
              placeholder="placeholder"
              onChange={ handleChange }
            />
            <label>Email</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="password"
              value={ credentials.password }
              className="form-control"
              placeholder="placeholder"
              onChange={ handleChange }
            />
            <label>Senha</label>
          </div>
        </form>
      </main>
    </section>
  );
}
