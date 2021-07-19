import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TaskLabel } from '../styles/styledComponents'

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
      checkedItems,
      handleToggleCheck,
      children,
    } = this.props;

    return (
      <TaskLabel
        checkedItems={ checkedItems }
        id={ id }
      >
        <input
          ref={ this.check }
          type="checkbox"
          value={ id }
          onChange={ handleToggleCheck }
        />
        <span>{ children }</span>
      </TaskLabel>
    );
  }
}

TaskSection.propTypes = {
  id: PropTypes.number.isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  children: PropTypes.node.isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
};

export default TaskSection;
