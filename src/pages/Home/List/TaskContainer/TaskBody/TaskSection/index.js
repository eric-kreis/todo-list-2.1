import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { TaskLabelS } from './styles';

import toggleCheck from '../../../../../../redux/reducers/listState/actions/toggleCheck';

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

const mapStateToProps = ({ listState }) => ({
  checkedItems: listState.checkedItems,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleCheck: (e) => dispatch(toggleCheck(e)),
});

TaskSection.propTypes = {
  id: PropTypes.number.isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  children: PropTypes.node.isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskSection);
