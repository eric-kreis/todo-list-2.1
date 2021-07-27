import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TaskLabelS } from './styles';

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
      <TaskLabelS
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
      </TaskLabelS>
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
