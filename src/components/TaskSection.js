import React, { Component } from 'react';

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
      text,
      handleToggleCheck,
    } = this.props;

    return (
      <label>
        <input
          ref={ this.check }
          type="checkbox"
          value={ id }
          onChange={ handleToggleCheck }
        />
        <span>{ text }</span>
      </label>
    );
  }
}

export default TaskSection;
