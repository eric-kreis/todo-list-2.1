import React from 'react';
import TaskContainer from './TaskContainer';

class Tasks extends React.Component {
  render() {
    const {
      tasks,
      handleEditBack,
    } = this.props;

    return (
      <ul>
        {
          tasks.map(({ id, text }) =>
            <TaskContainer
              key={ id }
              id={ id }
              text={ text }
              tasks={ tasks }
              handleEditBack={ handleEditBack }
            />
          )
        }
      </ul>
    );
  }
}

export default Tasks;
