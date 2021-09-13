import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import ModalWindowS from '../../../styles/ModalWindowS';
import PetModalS from './styles';

import dogs from '../../../assets/dogs';
import cats from '../../../assets/cats';

export default function PetModal({
  pets,
  setPets,
  handleChangePet,
  handleSelectPet,
  setOpenPetModal,
}) {
  return (
    <ModalWindowS>
      <PetModalS>
        { pets && pets.length < 1 ? (
          <div className="select-section">
            <div className="select-btn">
              <button type="button" value="cat" onClick={() => handleChangePet('cat')}>
                <img src={cats[1]} alt="Gato" />
              </button>
              <button type="button" value="dog" onClick={() => handleChangePet('dog')}>
                <img src={dogs[1]} alt="Cachorro" />
              </button>
            </div>
            <button type="button" onClick={() => setOpenPetModal(false)} className="return-btn">
              Voltar
            </button>
          </div>
        ) : (
          <div className="pet-section">
            <ul>
              { pets.map((img) => (
                <li key={uuidv4()}>
                  <button type="button" src={img} onClick={() => handleSelectPet(img)}>
                    <img src={img} alt="Pet" />
                  </button>
                </li>
              )) }
            </ul>
            <button type="button" onClick={() => setPets([])} className="return-btn">
              Voltar
            </button>
          </div>
        ) }
      </PetModalS>
    </ModalWindowS>
  );
}

PetModal.defaultProps = {
  pets: [],
};

PetModal.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.string),
  setPets: PropTypes.func.isRequired,
  handleChangePet: PropTypes.func.isRequired,
  handleSelectPet: PropTypes.func.isRequired,
  setOpenPetModal: PropTypes.func.isRequired,
};
