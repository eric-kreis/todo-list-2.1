import React from 'react';

import EditInputSection from './EditInputSection';

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
      handleEditBack,
      handleRemoveFocus,
    } = this.props;

    return (
      <li>
        { !edit
          ? (
            <section>
              <span>{ text }</span>
              <button
                onClick={ () => {
                  this.handleToggle();
                  handleRemoveFocus();
                } }
              >
                Editar
              </button>
              <button
                
              >
                Remover
              </button>
            </section>
          )
          : (
            <EditInputSection
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
