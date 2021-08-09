import React, { useState } from 'react';

import ColorModal from './HomeModals/ColorModal';
import ClearModalContainer from './HomeModals/ClearModalContainer';
import Header from '../../components/Header';
import FormContainer from './FormContainer';
import List from './List';
import Footer from '../../components/Footer';

import { HomeMainS, ThemeButtonS } from './styles';
import { ColorPalette } from '../../assets/icons';

export default function HomePage() {
  const [modals, setModals] = useState({
    clearModal: false,
    colorModal: false,
  });

  const handleToggleModal = (name) => {
    if (name === 'clear') {
      setModals(({ ...modals, clearModal: !modals.clearModal }));
    }
    if (name === 'color') {
      setModals(({ ...modals, colorModal: !modals.colorModal }));
    }
  };

  const { clearModal, colorModal } = modals;
  return (
    <section>
      <ColorModal
        handleToggleModal={ handleToggleModal }
        colorModal={ colorModal }
      />
      <ClearModalContainer
        clearModal={ clearModal }
        handleToggleModal={ handleToggleModal }
      />
      <Header
        changeThemeButton={
          <ThemeButtonS
            onClick={ () => { handleToggleModal('color'); } }
          >
            <ColorPalette title="Mudar cor" />
          </ThemeButtonS>
        }
      >
        LISTA DE TAREFAS
      </Header>
      <HomeMainS>
        <FormContainer handleToggleModal={ handleToggleModal } />
        <List />
      </HomeMainS>
      <Footer />
    </section>
  );
}
