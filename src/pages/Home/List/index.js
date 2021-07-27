import React from 'react';
import PropTypes from 'prop-types';

import { ListS } from './styles';
import TaskContainer from './TaskContainer';

class List extends React.Component {
  render() {
    const {
      show,
      tasks,
      checkedItems,
      handleEditBack,
      handleRemoveItem,
      handleToggleCheck,
    } = this.props;

    let filtredTasks = tasks;
    if (show === 'completed') {
      filtredTasks = tasks.filter(({ id }) => checkedItems.includes(id));
    }
    if (show === 'toDo') {
      filtredTasks = tasks.filter(({ id }) => !checkedItems.includes(id));
    }

    return (
      <ListS>
        {
          filtredTasks.map(({ id, text }) =>
            <TaskContainer
              key={ id }
              id={ id }
              text={ text }
              checkedItems={ checkedItems }
              handleEditBack={ handleEditBack }
              handleRemoveItem={ handleRemoveItem }
              handleToggleCheck={ handleToggleCheck }
            />
          )
        }
      </ListS>
    );
  }
}

List.propTypes = {
  show: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleEditBack: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
};

export default List;
