import React from 'react';
import PropTypes from 'prop-types';

import { FileUpload, Trash } from '../../../assets/icons';
import { usePhoto } from '../../../Contexts/PhotoContext';
import PhotoSettingS from './styles';

export default function PhotoSettings({ handleChangeFile, setOpenDeleteModal }) {
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
        <button type="button" onClick={() => setOpenDeleteModal(true)} className="delete-img-button">
          <Trash title="Excluir foto" />
        </button>
      </section>
    </PhotoSettingS>
  );
}

PhotoSettings.propTypes = {
  handleChangeFile: PropTypes.func.isRequired,
  setOpenDeleteModal: PropTypes.func.isRequired,
};
