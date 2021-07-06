import React from 'react';

import TaskSection from './TaskSection';
import EditSection from './EditSection';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEditing = this.handleEditing.bind(this);

    const { text } = props;
    this.state = {
      edit: false,
      taskText: text,
    }
  }

  handleToggle() {
    const { taskText } = this.state;
    if (taskText !== '') {
      this.setState((prevState) => ({
        edit: !prevState.edit,
      }));
    }
  }

  handleEditing({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { edit, taskText } = this.state

    const {
      id,
      text,
      mainInputFocus,
      checkedItems,
      handleEditBack,
      handleRemoveFocus,
      handleRemoveItem,
      handleToggleCheck,
    } = this.props;

    return (
      <li>
        { !edit
          ? (
            <section>
              <TaskSection
                id={ id }
                text={ text }
                checkedItems={ checkedItems }
                handleToggleCheck={ handleToggleCheck }
              />
              <button
                onClick={ () => {
                  handleRemoveFocus();
                  this.handleToggle();
                } }
              >
                Editar
              </button>
              <button
                onClick={ () => {
                  handleRemoveFocus();
                  handleRemoveItem(id);
                } }
              >
                Remover
              </button>
            </section>
          )
          : (
            <EditSection
              id={ id }
              edit={ edit }
              taskText={ taskText }
              mainInputFocus={ mainInputFocus }
              handleToggle={ this.handleToggle }
              handleEditing={ this.handleEditing }
              handleRemoveFocus={ handleRemoveFocus }
              handleEditBack={ handleEditBack }
            />
          )
        }
      </li>
    );
  }
}

export default TaskContainer;
