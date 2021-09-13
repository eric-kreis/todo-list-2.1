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
import dogs from '../../assets/dogs';
import cats from '../../assets/cats';
import PetModal from './PetModal';

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

  const [pets, setPets] = useState([]);

  const [openDefaultModal, setOpenDefaultModal] = useState('');
  const [openPetModal, setOpenPetModal] = useState(false);

  const [prevImg, setPrevImg] = useState(null);
  const [customImg, setCustomImg] = useState({
    type: '',
    name: '',
  });

  const handleChangeFile = ({ target }) => {
    const file = target.files[0];
    if (file) {
      setCustomImg(file);
      setOpenDefaultModal('send');

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
      const spacelessName = customImg.name.split(' ').join('');

      try {
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
        setError('Falha ao atualizar sua imagem :(');
        setPath('/');
      }
    }
  };

  const handleChangePet = (value) => {
    const images = {
      dog: dogs,
      cat: cats,
    };

    setPets(images[value]);
  };

  const handleSelectPet = async (img) => {
    const imageFetch = await fetch(img);
    const myBlob = await imageFetch.blob();
    myBlob.name = 'pet.png';
    myBlob.lastModified = new Date();

    const myFile = new File([myBlob], 'pet.png', {
      type: myBlob.type,
    });

    setOpenPetModal(false);
    setPrevImg(img);
    setCustomImg(myFile);
    setOpenDefaultModal('send');
    setPets([]);
  };

  const handleModalClick = () => {
    setOpenDefaultModal('');
    if (openDefaultModal === 'send') handleUpload();
    if (openDefaultModal === 'delete') handleDelete();
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
      { openDefaultModal && (
        <ModalWindowS>
          <ModalSectionS>
            <section className="photo-container">
              <img src={openDefaultModal === 'send' ? prevImg : image} alt="PrevImg" />
            </section>
            <section className="modal-buttons-container">
              <button type="button" onClick={handleModalClick}>
                { openDefaultModal === 'send' ? 'Enviar' : 'Excluir'}
              </button>
              <button onClick={() => setOpenDefaultModal('')} type="button">Voltar</button>
            </section>
          </ModalSectionS>
        </ModalWindowS>
      )}
      { openPetModal && (
        <PetModal
          pets={pets}
          setPets={setPets}
          handleSelectPet={handleSelectPet}
          handleChangePet={handleChangePet}
          setOpenPetModal={setOpenPetModal}
        />
      ) }
      <section className="profile-container">
        <PhotoSettings
          handleChangeFile={handleChangeFile}
          setOpenDefaultModal={setOpenDefaultModal}
          setOpenPetModal={setOpenPetModal}
        />
        <EmailsContainer />
        <div>
          <Link to="/" className="link last">Voltar</Link>
          <div className="logout-container">
            <button type="button" onClick={logout}>
              <Logout title="Finalizar sessão" />
            </button>
          </div>
        </div>
      </section>
    </ProfileBodyS>
  );
}
