import React, { useState } from 'react';

import ListProvider from '../../Contexts/ListContext';
import ClearModalContainer from './HomeModals/ClearModalContainer';
import Header from '../../components/Header';
import FormContainer from './FormContainer';
import List from './List';
import Footer from '../../components/Footer';

import { HomeMainS, HomeSectionS } from './styles';
import SideBar from '../../components/SideBar';

export default function HomePage() {
  const [modals, setModals] = useState({
    clearModal: false,
    colorModal: false,
  });

  const handleToggleModal = () => {
    setModals((prevModals) => ({ ...prevModals, clearModal: !modals.clearModal }));
  };

  const { clearModal } = modals;
  return (
    <ListProvider>
      <ClearModalContainer
        clearModal={clearModal}
        handleToggleModal={handleToggleModal}
      />
      <Header handleToggleModal={handleToggleModal}>
        LISTA DE TAREFAS
      </Header>
      <HomeMainS>
        <HomeSectionS>
          <SideBar />
          <FormContainer handleToggleModal={handleToggleModal} />
          <List />
        </HomeSectionS>
        <Footer />
      </HomeMainS>
    </ListProvider>
  );
}
