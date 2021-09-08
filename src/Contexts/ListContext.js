import React, { createContext, useContext, useState } from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { getStorage, saveStorage } from '../helpers';

const ListContext = createContext();

export const useList = () => useContext(ListContext);

// LocalStorage assistent;
const setAndSave = (stateFunc, key, value) => {
  stateFunc(value);
  saveStorage(key, value);
};

export default function ListProvider({ children }) {
  const savedTasks = getStorage('tasks');
  const savedChecks = getStorage('checkedItems');

  const [display, setDisplay] = useState('all');
  const [tasks, setTasks] = useState(savedTasks);
  const [checkedItems, setCheckedItems] = useState(savedChecks);

  const changeDisplay = ({ target: { value } }) => {
    setDisplay(value);
  };

  const addAndSaveToDo = (text) => {
    const adding = [...tasks, { id: v4(), text }];
    setAndSave(setTasks, 'tasks', adding);
  };

  const removeAndSaveToDo = (id) => {
    const removing = tasks.filter(({ id: taskId }) => taskId !== id);
    setAndSave(setTasks, 'tasks', removing);
  };

  const toggleAndSavingChecked = ({ target: { value, checked } }) => {
    if (checked) {
      const addingChecked = [...checkedItems, value];
      setAndSave(setCheckedItems, 'checkedItems', addingChecked);
    } else {
      const removingChecked = checkedItems.filter((id) => id !== value);
      setAndSave(setCheckedItems, 'checkedItems', removingChecked);
    }
  };

  const editingTasks = (taskText, taskId) => {
    if (taskText.trim()) {
      const editing = tasks.map(({ id, text }) => {
        if (id === taskId) return { id, text: taskText };
        return { id, text };
      });
      setAndSave(setTasks, 'tasks', editing);
    }
  };

  const clearToDo = () => {
    const doneTasks = tasks.filter(({ id }) => checkedItems.includes(id));
    setAndSave(setTasks, 'tasks', doneTasks);
  };

  const clearDone = () => {
    const toDoTasks = tasks.filter(({ id }) => !checkedItems.includes(id));
    setAndSave(setTasks, 'tasks', toDoTasks);
    setAndSave(setCheckedItems, 'checkedItems', []);
  };

  const clearAll = () => {
    setAndSave(setCheckedItems, 'checkedItems', []);
    setAndSave(setTasks, 'tasks', []);
  };

  const contextValue = {
    display,
    tasks,
    checkedItems,
    changeDisplay,
    addAndSaveToDo,
    removeAndSaveToDo,
    toggleAndSavingChecked,
    editingTasks,
    clearToDo,
    clearDone,
    clearAll,
  };

  return (
    <ListContext.Provider value={contextValue}>
      { children }
    </ListContext.Provider>
  );
}

ListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
