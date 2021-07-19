import React from 'react';
import PropTypes from 'prop-types';


import EditSection from './EditSection';
import TaskMain from './TaskMain';
import { TaskItem } from '../styles/styledComponents';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.editRules = this.editRules.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleEditing = this.handleEditing.bind(this);

    const { text } = props;
    this.state = {
      edit: false,
      editText: text,
    }
  }

  editRules() {
    const { edit, editText } = this.state;
    const { text } = this.props;
    if (!edit && !editText) {
      this.setState({ editText: text });
    }
  }

  handleToggleEdit() {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }), () => this.editRules());
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
    } = this.props;

    return (
      <TaskItem>
        { !edit
          ? (
            <TaskMain
              id={ id }
              text={ text }
              checkedItems={ checkedItems }
              handleRemoveItem={ handleRemoveItem }
              handleToggleCheck={ handleToggleCheck }
              handleToggleEdit={ this.handleToggleEdit }
            />
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
  handleToggleCheck: PropTypes.func.isRequired,
};

export default TaskContainer;
