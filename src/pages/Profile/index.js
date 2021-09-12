import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { ThemeContext } from 'styled-components';

import { useAuth } from '../../Contexts/AuthContext';
import { usePhoto } from '../../Contexts/PhotoContext';
import { storage } from '../../firebase';

import ModalWindowS from '../../styles/ModalWindowS';
import ProfileBodyS, { ModalSectionS } from './styles';

import EmailsContainer from './EmailsContainer';
import PhotoSettings from './PhotoSettings';

export default function Profile() {
  const { currentUser } = useAuth();
  const {
    image,
    error,
    setPath,
    setImage,
    setError,
    handleDelete,
  } = usePhoto();

  const { title } = useContext(ThemeContext);

  const [openFileModal, setOpenFileModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [prevImg, setPrevImg] = useState(null);

  const [userImg, setUserImg] = useState({
    type: '',
    name: '',
  });

  const handleChangeFile = ({ target }) => {
    const file = target.files[0];
    if (file) {
      setUserImg(file);
      setOpenFileModal(true);

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

      try {
        const spacelessName = userImg.name.split(' ').join('');
        setOpenFileModal(false);

        await toast.promise(
          async () => storage
            .ref(`images/${currentUser.uid}`)
            .child(spacelessName)
            .put(userImg, metaData),
          {
            pending: {
              render() { return 'Processando...'; },
              theme: title,
            },
            success: {
              render() { return 'Foto Atualizada!'; },
              theme: title,
            },
          },
        );

        const reader = new FileReader();
        reader.readAsDataURL(userImg);
        reader.onload = ({ target }) => setImage(target.result);
        setPath(spacelessName);
      } catch (imageError) {
        setError('Falha ao atualizar sua imagem.');
        setPath('/');
      }
    }
  };

  if (error) {
    toast.error(error, {
      theme: title,
      toastId: 'error-toast',
    });
  }

  return (
    <ProfileBodyS>
      <ToastContainer transition={Flip} />
      {openFileModal && userImg.name && (
        <ModalWindowS>
          <ModalSectionS>
            <section className="photo-container">
              <img src={prevImg} alt="PrevImg" />
            </section>
            <section className="modal-buttons-container">
              <button type="button" onClick={handleUpload}>Enviar</button>
              <button onClick={() => setOpenFileModal(false)} type="button">Voltar</button>
            </section>
          </ModalSectionS>
        </ModalWindowS>
      )}
      {openDeleteModal && (
        <ModalWindowS>
          <ModalSectionS>
            <section className="photo-container">
              <img src={image} alt="PrevImg" />
            </section>
            <section className="modal-buttons-container">
              <button
                type="button"
                onClick={() => {
                  handleDelete();
                  setOpenDeleteModal(false);
                }}
                className="delete-button"
              >
                Excluir
              </button>
              <button onClick={() => setOpenDeleteModal(false)} type="button">Voltar</button>
            </section>
          </ModalSectionS>
        </ModalWindowS>
      )}
      <section className="profile-container">
        <PhotoSettings
          handleChangeFile={handleChangeFile}
          setOpenDeleteModal={setOpenDeleteModal}
        />
        <EmailsContainer />
        <div>
          <Link to="/update-profile" className="link">Atualizar perfil</Link>
          <Link to="/" className="link last">Voltar</Link>
        </div>
      </section>
    </ProfileBodyS>
  );
}
