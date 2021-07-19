import React, { Component } from 'react';
import ColorModal from './ColorModal';
import ClearModalContainer from './ClearModalContainer';

class HomeModals extends Component {
  render() {
    const {
      tasks,
      checkedItems,
      handleToggleModal,
      colorModal,
      changeColor,
      show,
      clearModal,
      handleClear,
    } = this.props;

    return (
      <>
        <ColorModal
          handleToggleModal={ handleToggleModal }
          colorModal={ colorModal }
          changeColor={ changeColor }
        />
        <ClearModalContainer
          show={ show }
          clearModal={ clearModal }
          handleClear={ handleClear }
          tasks={ tasks }
          checkedItems={ checkedItems }
          handleToggleModal={ handleToggleModal }
        />
      </>
    );
  }
}

export default HomeModals;
