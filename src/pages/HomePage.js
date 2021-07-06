import React from 'react';

import FormContainer from '../components/FormContainer';
import Tasks from '../components/taskComponents/Tasks';

const savedTasks = JSON.parse(localStorage.getItem('tasks'));
const savedChecks = JSON.parse(localStorage.getItem('checkedItems'));

const initialState = {
  show: 'all',
  formInputClass: 'form-control',
  taskText: '',
  tasks: !savedTasks ? [] : savedTasks,
  mainInputFocus: true,
  checkedItems: !savedChecks ? [] : savedChecks,
};

class HomePage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleChangeView = this.handleChangeView.bind(this);
    this.handleEditBack = this.handleEditBack.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleToggleCheck = this.handleToggleCheck.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleRemoveFocus = this.handleRemoveFocus.bind(this);

    this.state = initialState;
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
    
    if (value.trim()) {
      this.setState({ formInputClass: 'form-control' });
    } else {
      this.setState({ formInputClass: 'form-control is-invalid' });
    }
  }

  handleAddTask() {
    const { taskText, tasks } = this.state;
    if (!taskText.trim()) {
      this.setState({
        formInputClass: 'form-control is-invalid',
        taskText: '',
      });
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

  handleChangeView(status = 'all') {
    this.setState({ show: status });
  }

  handleEditBack(newText, inputID) {
    if (newText.trim()) {
      const { tasks } = this.state;
      const tasksCopy = tasks.map(({ id, text }) => {
        if (id === inputID) return { id, text: newText };
        return { id, text };
      })
      this.setState({ tasks: tasksCopy }, () =>
        localStorage.setItem('tasks', JSON.stringify(tasksCopy)));
    }
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
      show,
      tasks,
      taskText,
      checkedItems,
      formInputClass,
      mainInputFocus,
    } = this.state;

    return (
      <main>
        <FormContainer
          handleAddTask={ this.handleAddTask }
          handleChange={ this.handleChange }
          handleClear={ this.handleClear }
          handleChangeView={ this.handleChangeView }
          handleFocus={ this.handleFocus }
          handleRemoveFocus={ this.handleRemoveFocus }
          mainInputFocus={ mainInputFocus }
          formInputClass={ formInputClass }
          taskText={ taskText }
        />
        <Tasks
          show={ show }
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

export default HomePage;
