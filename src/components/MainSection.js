import React from 'react';
import FormContainer from './FormContainer';
import Tasks from './Tasks';

const savedTasks = JSON.parse(localStorage.getItem('tasks'));

const initialState = {
  taskText: '',
  tasks: !savedTasks ? [] : savedTasks,
};

class MainSection extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEditBack = this.handleEditBack.bind(this);

    this.state = initialState;
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value })
  }

  handleAddTask() {
    const { taskText, tasks } = this.state;
    if (taskText === '') {
      alert('Escreva algo');
    } else {
      const addingTask = [
        ...tasks,
        {
          id: Math.ceil(Math.random() * 1000),
          text: taskText,
        },
      ];
      this.setState({
        tasks: addingTask,
        taskText: '',
      });
      localStorage.setItem('tasks', JSON.stringify(addingTask));
    }
  }

  handleClear() {
    this.setState({
      tasks: [],
      taskText: '',
    });
    localStorage.setItem('tasks', JSON.stringify([]));
  }

  handleEditBack(newText, inputID) {
    const { tasks } = this.state;
    const tasksCopy = tasks.map(({ id, text }) => {
      if (id === inputID) {
        return { id, text: newText };
      }
      return { id, text };
    })
    this.setState({
      tasks: tasksCopy,
    }, () => localStorage.setItem('tasks', JSON.stringify(tasksCopy)));
  }

  render() {
    const {
      taskText,
      tasks,
    } = this.state

    return (
      <main>
        <FormContainer
          handleAddTask={ this.handleAddTask }
          handleChange={ this.handleChange }
          handleClear={ this.handleClear }
          taskText={ taskText }
        />
        <Tasks
          tasks={ tasks }
          handleEditBack={ this.handleEditBack }
        />
      </main>
    );
  }
}

export default MainSection;
