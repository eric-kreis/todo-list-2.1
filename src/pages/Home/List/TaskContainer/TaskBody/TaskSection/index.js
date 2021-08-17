import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import ListContext from '../../../../../../Contexts/ListContext';
import TaskLabelS from './styles';

export default function TaskSection({ id, children }) {
  const { checkedItems, toggleAndSavingChecked } = useContext(ListContext);

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
        onChange={ toggleAndSavingChecked }
      />
      <span>{ children }</span>
    </TaskLabelS>
  );
}

TaskSection.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
