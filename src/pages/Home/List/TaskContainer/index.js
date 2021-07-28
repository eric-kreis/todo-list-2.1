import React from 'react';
import PropTypes from 'prop-types';

import EditSection from './EditSection';
import TaskBody from './TaskBody';
import { ItemS } from './styles';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.editRules = this.editRules.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleEditing = this.handleEditing.bind(this);

    this.state = {
      edit: false,
      editText: props.text,
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
    const { edit, editText } = this.state;

    const {
      id,
      text,
    } = this.props;

    return (
      <ItemS>
        { !edit
          ? (
            <TaskBody
              id={ id }
              text={ text }
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
            />
          )
        }
      </ItemS>
    );
  }
}

TaskContainer.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default TaskContainer;
