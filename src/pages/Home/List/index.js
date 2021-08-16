import React, { useCallback, useContext } from 'react';
import ListContext from '../../../Contexts/ListContext';

import ListS from './styles';
import TaskContainer from './TaskContainer';

export default function List() {
  const { display, tasks, checkedItems } = useContext(ListContext);

  const filterTasks = useCallback(() => {
    if (display === 'toDo') {
      return tasks.filter(({ id }) => !checkedItems.includes(id));
    }
    if (display === 'completed') {
      return tasks.filter(({ id }) => checkedItems.includes(id));
    }
    return tasks;
  }, [display, checkedItems, tasks]);

  return (
    <ListS>
      { filterTasks().map(({ id, text }) => (
        <TaskContainer
          key={ id }
          id={ id }
          text={ text }
        />
      )) }
    </ListS>
  );
}
