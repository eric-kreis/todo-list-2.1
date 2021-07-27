import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskSection from './TaskSection';
import { TaskBodyS, TaskButtonS } from './styles';
import IconButtonS from '../../../../../styles/IconButtonS.styles';
import { Edit, Remove } from '../../../../../icons';

class TaskBody extends Component {
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
      <TaskBodyS>
        <TaskSection
          id={ id }
          checkedItems={ checkedItems }
          handleToggleCheck={ handleToggleCheck }
        >
          { text }
        </TaskSection>
        <TaskButtonS>
          <IconButtonS
            medium
            onClick={ () => { handleToggleEdit(); } }
          >
            <Edit title="Editar tarefa" />
          </IconButtonS>
          <IconButtonS
            medium
            clear
            onClick={ () => { handleRemoveItem(id); } }
          >
            <Remove title="Remover tarefa" />
          </IconButtonS>
        </TaskButtonS>
      </TaskBodyS>
    );
  }
}

TaskBody.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
  handleToggleEdit: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default TaskBody;
