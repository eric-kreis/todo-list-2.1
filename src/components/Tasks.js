import React from 'react';
import TaskContainer from './TaskContainer';

class Tasks extends React.Component {
  render() {
    const {
      tasks,
      mainInputFocus,
      handleEditBack,
      handleRemoveFocus,
      handleRemoveItem,
    } = this.props;

    return (
      <ul>
        {
          tasks.map(({ id, text }) =>
            <TaskContainer
              key={ id }
              id={ id }
              text={ text }
              mainInputFocus={ mainInputFocus }
              handleEditBack={ handleEditBack }
              handleRemoveFocus={ handleRemoveFocus }
              handleRemoveItem={ handleRemoveItem }
            />
          )
        }
      </ul>
    );
  }
}

export default Tasks;
