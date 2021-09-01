import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ListProvider from '../../Contexts/ListContext';
import ColorModal from './HomeModals/ColorModal';
import ClearModalContainer from './HomeModals/ClearModalContainer';
import Header from '../../components/Header';
import FormContainer from './FormContainer';
import List from './List';
import Footer from '../../components/Footer';

import { HomeMainS, ProfileContainerS, ThemeButtonS } from './styles';
import { ColorPalette, ProfileIcon } from '../../assets/icons';
import { useAuth } from '../../Contexts/AuthContext';

export default function HomePage() {
  // const [mQuery, setMQuery] = useState({
  //   matches: window.innerWidth > 768 ? true : false,
  // });

  const { currentUser } = useAuth();

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
      <Header
        changeThemeButton={(
          <ThemeButtonS onClick={() => handleToggleModal('color')}>
            <ColorPalette title="Mudar cor" />
          </ThemeButtonS>
        )}
      >
        LISTA DE TAREFAS
      </Header>
      <ProfileContainerS>
        <Link to="profile">
          <ProfileIcon className="profile-icon" />
          {currentUser.email}
        </Link>
      </ProfileContainerS>
      <HomeMainS>
        <FormContainer handleToggleModal={handleToggleModal} />
        <List />
      </HomeMainS>
      <Footer />
    </ListProvider>
  );
}
