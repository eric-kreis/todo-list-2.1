import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskSection from './TaskSection';
import { TaskBody, TaskButtons, IconsButtons } from '../styles/styledComponents';
import { Edit, Remove } from '../icons/Icons';

class TaskMain extends Component {
  render() {
    const {
      id,
      text,
      checkedItems,
      handleToggleCheck,
      handleToggleEdit,
      handleRemoveItem,
    } = this.props;

    return (
      <TaskBody>
        <TaskSection
          id={ id }
          checkedItems={ checkedItems }
          handleToggleCheck={ handleToggleCheck }
        >
          { text }
        </TaskSection>
        <TaskButtons>
          <IconsButtons
            medium
            onClick={ () => { handleToggleEdit(); } }
          >
            <Edit title="Editar tarefa" />
          </IconsButtons>
          <IconsButtons
            medium
            clear
            onClick={ () => { handleRemoveItem(id); } }
          >
            <Remove title="Remover tarefa" />
          </IconsButtons>
        </TaskButtons>
      </TaskBody>
    );
  }
}

TaskMain.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
  handleToggleEdit: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default TaskMain;
