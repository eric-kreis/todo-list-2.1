import React, { useEffect, useState } from 'react';

import ClearModalContainer from './HomeModals/ClearModalContainer';
import Header from '../../components/Header';
import FormContainer from './FormContainer';
import List from './List';
import Footer from '../../components/Footer';
import { getStorage, saveStorage } from '../../helpers';
import { useAuth } from '../../Contexts/AuthContext';

import { HomeMainS, HomeSectionS } from './styles';
import SideBar from '../../components/SideBar';
import ListProvider from '../../Contexts/ListContext';

export default function HomePage() {
  const { currentUser } = useAuth();
  const [modals, setModals] = useState({
    clearModal: false,
    colorModal: false,
  });

  const handleToggleModal = () => {
    setModals((prevModals) => ({ ...prevModals, clearModal: !modals.clearModal }));
  };

  useEffect(() => {
    const emailList = getStorage('emailList');
    const noRepetitions = emailList
      .filter((savedEmail, index) => (
        savedEmail !== currentUser.email && index < 2));
    saveStorage('emailList', [currentUser.email, ...noRepetitions]);
  }, [currentUser.email]);

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
