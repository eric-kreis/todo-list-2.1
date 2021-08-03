import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TaskLabelS from './styles';

import toggleCheck from '../../../../../../redux/reducers/listState/actions/toggleCheck';

function TaskSection({
  id,
  checkedItems,
  handleToggleCheck,
  children,
}) {
  const check = useRef(null);

  useEffect(() => {
    if (checkedItems.includes(id)) {
      check.current.checked = true;
    }
  });

  return (
    <TaskLabelS
      checkedItems={ checkedItems }
      id={ id }
    >
      <input
        ref={ check }
        type="checkbox"
        value={ id }
        onChange={ handleToggleCheck }
      />
      <span>{ children }</span>
    </TaskLabelS>
  );
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
