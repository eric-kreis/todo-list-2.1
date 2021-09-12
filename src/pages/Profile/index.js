import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../Contexts/AuthContext';
import { usePhoto } from '../../Contexts/PhotoContext';
import { database, storage } from '../../firebase';

import ModalWindowS from '../../styles/ModalWindowS';
import { FileUpload, Trash } from '../../assets/icons';
import { SubmitButtonS } from '../../styles/auth';
import ProfileBodyS, { ModalSectionS } from './styles';

import defaultImage from '../../assets/default-profile.png';
import { getStorage } from '../../helpers';

export default function Profile() {
  const history = useHistory();
  const { currentUser } = useAuth();
  const {
    image,
    loading,
    setLoading,
    setPath,
    setImage,
    setError,
  } = usePhoto();

  const [openModal, setOpenModal] = useState(false);

  const [prevImg, setPrevImg] = useState({
    type: '',
    name: '',
  });

  const [userImg, setUserImg] = useState({
    type: '',
    name: '',
  });

  const handleChange = ({ target }) => {
    const file = target.files[0];
    if (file) {
      setUserImg(file);
      setOpenModal(true);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => setPrevImg(e.target.result);
    }
  };

  const handleUpload = async () => {
    if (userImg.type) {
      const metaData = {
        contentType: userImg.type,
        name: userImg.name,
      };

      const spacelessName = userImg.name.split(' ').join('');

      setOpenModal(false);

      const reader = new FileReader();
      reader.readAsDataURL(userImg);
      reader.onload = ({ target }) => setImage(target.result);

      await storage
        .ref(`images/${currentUser.uid}`)
        .child(spacelessName)
        .put(userImg, metaData);

      setPath(spacelessName);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      setError('');

      await database.users.doc(currentUser.uid).update({
        imagePath: '/',
      });

      setPath('/');
      setImage(defaultImage);
    } catch (imageError) {
      setError('Falha ao excluir sua imagem');
    }
    setLoading(false);
  };

  return (
    <ProfileBodyS>
      {openModal && userImg.name && (
        <ModalWindowS>
          <ModalSectionS>
            <section className="photo-container">
              <img src={prevImg} alt="PrevImg" />
            </section>
            <section className="modal-buttons-container">
              <button type="button" onClick={handleUpload}>Enviar</button>
              <button onClick={() => setOpenModal(false)} type="button">Voltar</button>
            </section>
          </ModalSectionS>
        </ModalWindowS>
      )}
      <section className="profile-container">
        <div className="photo-settings">
          <section className="photo-container">
            {!loading && <img src={image} alt="Perfil" />}
          </section>
          <section className="file-settings">
            <label htmlFor="img-input">
              <FileUpload className="file-icon" title="Selecionar arquivo" />
              <input
                id="img-input"
                type="file"
                onChange={handleChange}
                accept="image/png, image/jpeg"
              />
            </label>
            <button type="button" onClick={handleDelete} className="delete-img-button">
              <Trash title="Excluir foto" />
            </button>
          </section>
        </div>
        <div className="emails-container">
          <p>
            Email atual:
            <strong>{` ${currentUser.email}`}</strong>
          </p>
          <hr />
          <ul>
            <p>Últimos logins nestes dispositivo: </p>
            { getStorage('emailList').map((savedEmail) => {
              const provider = savedEmail.split('@')[1];
              return <li>{`${savedEmail.substr(0, 3)}...@${provider}`}</li>;
            }) }
          </ul>
          <hr />
        </div>
        <div>
          <div>
            <Link to="/update-profile">Atualizar perfil</Link>
          </div>
          <SubmitButtonS onClick={() => history.push('/')}>Voltar</SubmitButtonS>
        </div>
      </section>
    </ProfileBodyS>
  );
}
