import React from 'react';
import FormContainer from './FormContainer';
import Tasks from './Tasks';

const savedTasks = JSON.parse(localStorage.getItem('tasks'));
const savedChecks = JSON.parse(localStorage.getItem('checkedItems'));

const initialState = {
  taskText: '',
  tasks: !savedTasks ? [] : savedTasks,
  mainInputFocus: true,
  checkedItems: !savedChecks ? []: savedChecks,
};

class MainSection extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEditBack = this.handleEditBack.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleToggleCheck = this.handleToggleCheck.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleRemoveFocus = this.handleRemoveFocus.bind(this);

    this.state = initialState;
  }

  componentDidMount() {
    const { tasks } = this.state;
    const validTasks = tasks.filter(({ text }) => text.trim());
    this.setState({ tasks: validTasks });
    localStorage.setItem('tasks', JSON.stringify(validTasks));
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value })
  }

  handleAddTask() {
    const { taskText, tasks } = this.state;
    if (!taskText.trim()) {
      alert('Escreva algo');
      this.setState({ taskText: '' });
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
      checkedItems: [],
    });
    localStorage.setItem('tasks', JSON.stringify([]));
    localStorage.setItem('checkedItems', JSON.stringify([]));
  }

  handleEditBack(newText, inputID) {
    const { tasks } = this.state;
    const tasksCopy = tasks.map(({ id, text }) => {
      if (id === inputID) return { id, text: newText };
      return { id, text };
    })
    this.setState({ tasks: tasksCopy }, () =>
      localStorage.setItem('tasks', JSON.stringify(tasksCopy)));
  }

  handleRemoveItem(taskID) {
    const { tasks, checkedItems } = this.state;
    const tasksWithoutItem = tasks.filter(({ id }) => taskID !== id);
    const attChecks = checkedItems.filter((id) => taskID !== id);
    this.setState({
      tasks: tasksWithoutItem,
      checkedItems: attChecks,
    }, () => {
      localStorage.setItem('tasks', JSON.stringify(tasksWithoutItem));
      localStorage.setItem('checkedItems', JSON.stringify(attChecks));
    });
  }

  handleToggleCheck({ target }) {
    const { checked, value } = target;
    const { tasks, checkedItems } = this.state;
    if (checked) {
      const { id } = tasks.find(({ id }) => id === Number(value));
      const addingChecked = [...checkedItems, id];
      this.setState({ checkedItems: addingChecked }, () =>
        localStorage.setItem('checkedItems', JSON.stringify(addingChecked)));
    } else {
      const removingItem = checkedItems.filter((id) => id !== Number(value));
      this.setState({ checkedItems: removingItem }, () =>
        localStorage.setItem('checkedItems', JSON.stringify(removingItem)));
    }

    this.handleRemoveFocus();
  }

  handleFocus() {
    this.setState({ mainInputFocus: true });
  }

  handleRemoveFocus() {
    this.setState({ mainInputFocus: false });
  }

  render() {
    const {
      tasks,
      taskText,
      checkedItems,
      mainInputFocus,
    } = this.state

    return (
      <main>
        <FormContainer
          handleAddTask={ this.handleAddTask }
          handleChange={ this.handleChange }
          handleClear={ this.handleClear }
          handleFocus={ this.handleFocus }
          handleRemoveFocus={ this.handleRemoveFocus }
          mainInputFocus={ mainInputFocus }
          taskText={ taskText }
        />
        <Tasks
          tasks={ tasks }
          mainInputFocus={ mainInputFocus }
          checkedItems={ checkedItems }
          handleEditBack={ this.handleEditBack }
          handleRemoveFocus={ this.handleRemoveFocus }
          handleRemoveItem={ this.handleRemoveItem }
          handleToggleCheck={ this.handleToggleCheck }
        />
      </main>
    );
  }
}

export default MainSection;
