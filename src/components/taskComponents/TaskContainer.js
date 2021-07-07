import React from 'react';
import PropTypes from 'prop-types';

import TaskSection from './TaskSection';
import EditSection from './EditSection';
import { TaskItem, TaskBody } from '../../styles/styledComponents';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleEditing = this.handleEditing.bind(this);

    const { text } = props;
    this.state = {
      edit: false,
      editText: text,
    }
  }

  handleToggleEdit() {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  }

  handleEditing({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { edit, editText } = this.state

    const {
      id,
      text,
      checkedItems,
      handleEditBack,
      handleRemoveItem,
      handleToggleCheck,
      handleRemoveFocus,
    } = this.props;

    return (
      <TaskItem>
        { !edit
          ? (
            <TaskBody>
              <TaskSection
                id={ id }
                checkedItems={ checkedItems }
                handleToggleCheck={ handleToggleCheck }
              >
                { text }
              </TaskSection>
              <div>
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
              </div>
            </TaskBody>
          )
          : (
            <EditSection
              id={ id }
              edit={ edit }
              editText={ editText }
              handleToggleEdit={ this.handleToggleEdit }
              handleEditing={ this.handleEditing }
              handleEditBack={ handleEditBack }
            />
          )
        }
      </TaskItem>
    );
  }
}

TaskContainer.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleEditBack: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleRemoveFocus: PropTypes.func.isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
};

export default TaskContainer;
