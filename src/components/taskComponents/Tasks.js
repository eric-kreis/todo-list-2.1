import React from 'react';
import PropTypes from 'prop-types';

import { TaskList } from '../../styles/styledComponents';
import TaskContainer from './TaskContainer';

class Tasks extends React.Component {
  render() {
    const {
      show,
      tasks,
      checkedItems,
      handleEditBack,
      handleRemoveItem,
      handleToggleCheck,
      handleRemoveFocus,
    } = this.props;

    let filtredTasks = tasks;

    if (show === 'completed') {
      filtredTasks = tasks.filter(({ id }) => checkedItems.includes(id));
    }

    if (show === 'toDo') {
      filtredTasks = tasks.filter(({ id }) => !checkedItems.includes(id));
    }

    return (
      <TaskList>
        {
          filtredTasks.map(({ id, text }) =>
            <TaskContainer
              key={ id }
              id={ id }
              text={ text }
              checkedItems={ checkedItems }
              handleEditBack={ handleEditBack }
              handleRemoveFocus={ handleRemoveFocus }
              handleRemoveItem={ handleRemoveItem }
              handleToggleCheck={ handleToggleCheck }
            />
          )
        }
      </TaskList>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleEditBack: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
};

export default Tasks;
