import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskSection extends Component {
  constructor() {
    super();
    this.check = React.createRef();
  }

  componentDidMount() {
    const { checkedItems, id } = this.props;
    if (checkedItems.includes(id)) {
      this.check.current.checked = true;
    }
  }

  render() {
    const {
      id,
      handleToggleCheck,
      children,
    } = this.props;

    return (
      <label>
        <input
          ref={ this.check }
          type="checkbox"
          value={ id }
          onChange={ handleToggleCheck }
        />
        <span>{ children }</span>
      </label>
    );
  }
}

TaskSection.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
};

export default TaskSection;
