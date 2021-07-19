import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ColorModal from './ColorModal';
import ClearModalContainer from './ClearModalContainer';

class HomeModals extends Component {
  render() {
    const {
      show,
      tasks,
      checkedItems,
      colorModal,
      clearModal,
      changeColor,
      handleToggleModal,
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

HomeModals.propTypes = {
  show: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  colorModal: PropTypes.bool.isRequired,
  clearModal: PropTypes.bool.isRequired,
  changeColor: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default HomeModals;
