import React, { useCallback } from 'react';
import TasksLoading from '../../../assets/loadingComponents/TasksLoading';
import { useList } from '../../../Contexts/ListContext';

import ListS from './styles';
import TaskContainer from './TaskContainer';

export default function List() {
  const {
    display,
    tasks,
    checkedItems,
    loading,
  } = useList();

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
      { !loading ? filterTasks().map(({ id, text }) => (
        <TaskContainer
          key={id}
          id={id}
          text={text}
        />
      )) : <TasksLoading /> }
    </ListS>
  );
}
