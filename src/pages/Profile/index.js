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
import { Logout } from '../../assets/icons';

export default function Profile() {
  const { currentUser, logout } = useAuth();
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

  const [customImg, setCustomImg] = useState({
    type: '',
    name: '',
  });

  const handleChangeFile = ({ target }) => {
    const file = target.files[0];
    if (file) {
      setCustomImg(file);
      setOpenFileModal(true);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => setPrevImg(e.target.result);
    }
  };

  const handleUpload = async () => {
    if (customImg.type) {
      const metaData = {
        contentType: customImg.type,
        name: customImg.name,
      };

      try {
        const spacelessName = customImg.name.split(' ').join('');
        setOpenFileModal(false);

        await toast.promise(
          storage
            .ref(`images/${currentUser.uid}`)
            .child(spacelessName)
            .put(customImg, metaData),
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
        reader.readAsDataURL(customImg);
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
      {openFileModal && customImg.name && (
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
          <Link to="/" className="link last">Voltar</Link>
          <div className="logout-container">
            <button type="button" onClick={logout}>
              <Logout />
            </button>
          </div>
        </div>
      </section>
    </ProfileBodyS>
  );
}
