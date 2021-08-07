import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import TaskLabelS from './styles';
import toggleCheck from '../../../../../../redux/reducers/listState/actions/toggleCheck';

export default function TaskSection({ id, children }) {
  const { checkedItems } = useSelector(({ listState }) => listState);

  const dispatch = useDispatch();

  const handleToggleCheck = useCallback((e) => (
    dispatch(toggleCheck(e))), [dispatch]);

  const check = useRef(null);

  useEffect(() => {
    if (checkedItems.includes(id)) {
      check.current.checked = true;
    }
  }, [checkedItems, id]);

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

TaskSection.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
