import React from 'react';
import TaskContainer from './TaskContainer';

class Tasks extends React.Component {
  render() {
    const {
      tasks,
      mainInputFocus,
      handleEditBack,
      handleRemoveFocus,
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
            />
          )
        }
      </ul>
    );
  }
}

export default Tasks;
