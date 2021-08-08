import { v4 } from 'uuid';
import { DISPLAY_TASKS } from './actions/displayTasks';
import { ADD_ITEM } from './actions/addItem';
import { REMOVE_ITEM } from './actions/removeItem';
import { TOGGLE_CHECKED } from './actions/toggleCheck';
import { EDIT } from './actions/editBack';
import { CLEAR_ALL } from './actions/clearAll';
import { CLEAR_TODO } from './actions/clearToDo';
import { CLEAR_DONE } from './actions/clearDone';

// LocalStorage assistent;
const saveState = (key, value) => localStorage
  .setItem(key, JSON.stringify(value));

// Cases assistents;
const addAndSaveToDo = (state, action) => {
  const adding = {
    ...state,
    tasks: [...state.tasks, {
      id: v4(),
      text: action.text,
    }],
  };

  saveState('tasks', adding.tasks);
  return adding;
};

const removeAndSaveToDo = (state, action) => {
  const removing = {
    ...state,
    tasks: state.tasks.filter(({ id }) => id !== action.id),
  };
  saveState('tasks', removing.tasks);

  return removing;
};

const toggleAndSavingChecked = (state, action) => {
  if (action.checked) {
    const { id } = state.tasks.find(({ id: taskId }) => taskId === action.value);
    const addingChecked = {
      ...state,
      checkedItems: [...state.checkedItems, id],
    };
    saveState('checkedItems', addingChecked.checkedItems);
    return addingChecked;
  }

  const removingChecked = {
    ...state,
    checkedItems: state.checkedItems.filter((id) => id !== action.value),
  };
  saveState('checkedItems', removingChecked.checkedItems);
  return removingChecked;
};

const editingTasks = (state, action) => {
  const editing = {
    ...state,
    tasks: state.tasks.map(({ id, text }) => {
      if (id === action.id) return { id, text: action.text };
      return { id, text };
    }),
  };
  saveState('tasks', editing.tasks);
  return editing;
};

const onlyDone = (state) => {
  const doneTasks = {
    ...state,
    tasks: state.tasks.filter(({ id }) => (
      state.checkedItems.includes(id))),
  };

  saveState('tasks', doneTasks.tasks);
  return doneTasks;
};

const onlyToDo = (state) => {
  const toDoTasks = {
    ...state,
    tasks: state.tasks.filter(({ id }) => (
      !state.checkedItems.includes(id))),
    checkedItems: [],
  };

  saveState('tasks', toDoTasks.tasks);
  localStorage.setItem('checkedItems', JSON.stringify([]));
  return toDoTasks;
};

// Reducer code starts below;
const savedTasks = JSON.parse(localStorage.getItem('tasks'));
const savedChecks = JSON.parse(localStorage.getItem('checkedItems'));
const INITIAL_STATE = {
  display: 'all',
  tasks: !savedTasks ? [] : savedTasks,
  checkedItems: !savedChecks ? [] : savedChecks,
};

const listState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DISPLAY_TASKS:
    return { ...state, display: action.value };

  case ADD_ITEM:
    return addAndSaveToDo(state, action);

  case REMOVE_ITEM:
    return removeAndSaveToDo(state, action);

  case TOGGLE_CHECKED:
    return toggleAndSavingChecked(state, action);

  case EDIT:
    return (action.text.trim())
      ? editingTasks(state, action)
      : state;

  case CLEAR_ALL:
    localStorage.setItem('tasks', JSON.stringify([]));
    localStorage.setItem('checkedItems', JSON.stringify([]));
    return { ...state, tasks: [], checkedItems: [] };

  case CLEAR_TODO:
    return onlyDone(state);

  case CLEAR_DONE:
    return onlyToDo(state);

  default:
    return state;
  }
};

export default listState;
