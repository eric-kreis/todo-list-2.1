import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ListProvider from '../../Contexts/ListContext';
import ColorModal from './HomeModals/ColorModal';
import ClearModalContainer from './HomeModals/ClearModalContainer';
import Header from '../../components/Header';
import FormContainer from './FormContainer';
import List from './List';
import Footer from '../../components/Footer';

import { HomeBodyS, HomeMainS, ThemeButtonS } from './styles';
import { ColorPalette } from '../../assets/icons';
import SideBar from '../../components/SideBar';

export default function HomePage() {
  const active = useSelector(({ sideBar }) => sideBar.active);

  const [modals, setModals] = useState({
    clearModal: false,
    colorModal: false,
  });

  const handleToggleModal = (name) => {
    if (name === 'clear') {
      setModals((prevModals) => ({ ...prevModals, clearModal: !modals.clearModal }));
    }
    if (name === 'color') {
      setModals((prevModals) => ({ ...prevModals, colorModal: !modals.colorModal }));
    }
  };

  const { clearModal, colorModal } = modals;
  return (
    <ListProvider>
      <ColorModal
        handleToggleModal={handleToggleModal}
        colorModal={colorModal}
      />
      <ClearModalContainer
        clearModal={clearModal}
        handleToggleModal={handleToggleModal}
      />
      <HomeBodyS active={active}>
        <SideBar />
        <Header
          changeThemeButton={(
            <ThemeButtonS onClick={() => handleToggleModal('color')}>
              <ColorPalette title="Mudar cor" />
            </ThemeButtonS>
          )}
        >
          LISTA DE TAREFAS
        </Header>
        <HomeMainS>
          <FormContainer handleToggleModal={handleToggleModal} />
          <List />
        </HomeMainS>
        <Footer />
      </HomeBodyS>
    </ListProvider>
  );
}
