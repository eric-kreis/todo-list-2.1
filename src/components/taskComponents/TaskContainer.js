import React from 'react';
import PropTypes from 'prop-types';

import TaskSection from './TaskSection';
import EditSection from './EditSection';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleEditing = this.handleEditing.bind(this);

    const { text } = props;
    this.state = {
      edit: false,
      taskText: text,
    }
  }

  handleToggleEdit() {
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
                  this.handleToggleEdit();
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
              handleToggleEdit={ this.handleToggleEdit }
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

TaskContainer.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  mainInputFocus: PropTypes.bool.isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleEditBack: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleRemoveFocus: PropTypes.func.isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
};

export default TaskContainer;
