import React from 'react';
import PropTypes from 'prop-types';
import TaskContainer from './TaskContainer';

class Tasks extends React.Component {
  render() {
    const {
      show,
      tasks,
      checkedItems,
      mainInputFocus,
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
      <ul>
        {
          filtredTasks.map(({ id, text }) =>
            <TaskContainer
              key={ id }
              id={ id }
              text={ text }
              checkedItems={ checkedItems }
              mainInputFocus={ mainInputFocus }
              handleEditBack={ handleEditBack }
              handleRemoveFocus={ handleRemoveFocus }
              handleRemoveItem={ handleRemoveItem }
              handleToggleCheck={ handleToggleCheck }
            />
          )
        }
      </ul>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  mainInputFocus: PropTypes.bool.isRequired,
  handleEditBack: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
};

export default Tasks;
