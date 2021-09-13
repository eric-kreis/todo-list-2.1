import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  FileUpload,
  Gallery,
  Settings,
  Trash,
} from '../../../assets/icons';
import PhotoSettingS from './styles';

import { usePhoto } from '../../../Contexts/PhotoContext';

export default function PhotoSettings({ handleChangeFile, setOpenDefaultModal, setOpenPetModal }) {
  const { image, loading } = usePhoto();

  return (
    <PhotoSettingS>
      <section className="photo-container">
        {!loading && <img src={image} alt="Perfil" />}
      </section>
      <section className="file-settings">
        <label htmlFor="img-input">
          <FileUpload className="file-icon" title="Selecionar arquivo" />
          <input
            id="img-input"
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg"
          />
        </label>
        <button
          type="button"
          onClick={() => setOpenDefaultModal('delete')}
          className="icon-btn delete-img-button"
        >
          <Trash title="Excluir foto" />
        </button>
        <button
          type="button"
          onClick={() => setOpenPetModal(true)}
          className="icon-btn gallery"
          title="Abrir galeria"
        >
          <Gallery />
        </button>
        <Link to="/update-credentials" className="icon-btn update-credentials">
          <Settings title="Alterar credenciais" />
        </Link>
      </section>
    </PhotoSettingS>
  );
}

PhotoSettings.propTypes = {
  handleChangeFile: PropTypes.func.isRequired,
  setOpenDefaultModal: PropTypes.func.isRequired,
  setOpenPetModal: PropTypes.func.isRequired,
};
