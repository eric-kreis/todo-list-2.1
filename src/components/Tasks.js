import React from 'react';
import TaskContainer from './TaskContainer';

class Tasks extends React.Component {
  render() {
    const {
      tasks,
      mainInputFocus,
      handleEditBack,
      checkedItems,
      handleRemoveFocus,
      handleRemoveItem,
      handleToggleCheck,
    } = this.props;

    return (
      <ul>
        {
          tasks.map(({ id, text }) =>
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

export default Tasks;
