import React from 'react';

import Header from '../sources/Header';
import FormContainer from '../components/FormContainer';
import Tasks from '../components/Tasks';
import ClearModalContainer from '../components/ClearModalContainer';
import { HomeMain } from '../styles/styledComponents';
import Footer from '../sources/Footer';

const savedTasks = JSON.parse(localStorage.getItem('tasks'));
const savedChecks = JSON.parse(localStorage.getItem('checkedItems'));

const initialState = {
  show: 'all',
  formInputClass: 'form-control',
  taskText: '',
  tasks: !savedTasks ? [] : savedTasks,
  mainInputFocus: false,
  checkedItems: !savedChecks ? [] : savedChecks,
  clearModal: false,
};

class HomePage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.formClassToggle = this.formClassToggle.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEditBack = this.handleEditBack.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleToggleCheck = this.handleToggleCheck.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleRemoveFocus = this.handleRemoveFocus.bind(this);

    this.clearToDo = this.clearToDo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.clearAll = this.clearAll.bind(this);

    this.state = initialState;
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  formClassToggle({ target }) {
    const { value } = target;
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

  handleToggleModal() {
    this.setState((prevState) =>
      ({ clearModal: !prevState.clearModal }));
  }

  handleClear() {
    const { show } = this.state;
    if (show === 'toDo') {
      this.clearToDo();
    } else if (show === 'completed') {
      this.clearCompleted();
    } else {
      this.clearAll();
    }
  }
  
  clearToDo() {
    const { tasks, checkedItems } = this.state;
    const onlyCompleted = tasks.filter(({ id }) => checkedItems.includes(id));
    this.setState({ tasks: onlyCompleted, taskText: '' });
    localStorage.setItem('tasks', JSON.stringify(onlyCompleted));
  }

  clearCompleted() {
    const { tasks, checkedItems } = this.state;
    const onlyToDo = tasks.filter(({ id }) => !checkedItems.includes(id));
    this.setState({ tasks: onlyToDo, taskText: '' });
    localStorage.setItem('tasks', JSON.stringify(onlyToDo));
    localStorage.setItem('checkedItems', JSON.stringify([]));
  }

  clearAll() {
    this.setState({
      tasks: [],
      taskText: '',
      checkedItems: [],
    });
    localStorage.setItem('tasks', JSON.stringify([]));
    localStorage.setItem('checkedItems', JSON.stringify([]));
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
    this.setState({
      mainInputFocus: false,
      formInputClass: 'form-control',
    });
  }

  render() {
    const {
      show,
      tasks,
      taskText,
      checkedItems,
      formInputClass,
      mainInputFocus,
      clearModal,
    } = this.state;

    const { toggleTheme, theme } = this.props;

    return (
      <section>
        <ClearModalContainer
          show={ show }
          clearModal={ clearModal }
          handleClear={ this.handleClear }
          handleToggleModal={ this.handleToggleModal }
        />
        <Header
          toggleTheme={ toggleTheme }
          theme={ theme }
        >
          <h1>Lista de Tarefas</h1>
        </Header>
        <HomeMain>
          <FormContainer
            handleAddTask={ this.handleAddTask }
            handleChange={ this.handleChange }
            handleToggleModal={ this.handleToggleModal }
            formClassToggle={ this.formClassToggle }
            handleFocus={ this.handleFocus }
            handleRemoveFocus={ this.handleRemoveFocus }
            mainInputFocus={ mainInputFocus }
            formInputClass={ formInputClass }
            taskText={ taskText }
          />
          <Tasks
            show={ show }
            tasks={ tasks }
            checkedItems={ checkedItems }
            handleEditBack={ this.handleEditBack }
            handleRemoveItem={ this.handleRemoveItem }
            handleRemoveFocus={ this.handleRemoveFocus }
            handleToggleCheck={ this.handleToggleCheck }
          />
        </HomeMain>
        <Footer />
      </section>
    );
  }
}

export default HomePage;
