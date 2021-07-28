import React, { Component } from 'react';

import ColorModal from './HomeModals/ColorModal';
import ClearModalContainer from './HomeModals/ClearModalContainer';
import Header from '../../components/Header';
import FormContainer from './FormContainer';
import List from './List';
import Footer from '../../components/Footer';

import  HomeMainS from './styles';
class HomePage extends Component {
  constructor() {
    super();

    this.handleToggleModal = this.handleToggleModal.bind(this);

    this.state = {
      clearModal: false,
      colorModal: false,
    };
  }

  handleToggleModal(name) {
    if (name === 'clear') {
      this.setState((prevState) =>
        ({ clearModal: !prevState.clearModal }));
    }
    if (name === 'color') {
      this.setState((prevState) =>
        ({ colorModal: !prevState.colorModal }));
    }
  }

  render() {
    const { clearModal, colorModal } = this.state;

    return (
      <section>
        <ColorModal
          handleToggleModal={ this.handleToggleModal }
          colorModal={ colorModal }
        />
        <ClearModalContainer
          clearModal={ clearModal }
          handleToggleModal={ this.handleToggleModal }
        />
        <Header
          handleToggleModal={ this.handleToggleModal }
        >
          <h1>LISTA DE TAREFAS</h1>
        </Header>
        <HomeMainS>
          <FormContainer
            handleToggleModal={ this.handleToggleModal }
          />
          <List />
        </HomeMainS>
        <Footer />
      </section>
    );
  }
}

export default HomePage;
