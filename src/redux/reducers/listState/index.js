import { v4 } from 'uuid';
import { DISPLAY_TASKS } from './actions/displayTasks';
import { ADD_ITEM } from './actions/addItem';
import { REMOVE_ITEM } from './actions/removeItem';
import { TOGGLE_CHECKED } from './actions/toggleCheck';
import { EDIT } from './actions/editBack';
import { CLEAR_ALL } from './actions/clearAll';
import { CLEAR_TODO } from './actions/clearToDo';
import { CLEAR_DONE } from './actions/clearDone';

// localStorage assistent;
const saveTasks = (callback, state, action) => localStorage
  .setItem('tasks', JSON.stringify(callback(state, action).tasks));

const saveCheckedItems = (callback, state, action) => localStorage
  .setItem('checkedItems', JSON.stringify(callback(state, action).checkedItems));

// Recucer assistents;
const addOneMore = (state, action) => ({
  ...state,
  tasks: [...state.tasks, {
    id: v4(),
    text: action.text,
  }],
});

const removeItem = (state, action) => ({
  ...state,
  tasks: state.tasks.filter(({ id }) => id !== action.id),
});

const toggleChecked = (state, action) => {
  if (action.checked) {
    const { id } = state.tasks.find(({ id: taskId }) => taskId === action.value);
    return { ...state, checkedItems: [...state.checkedItems, id] };
  }
  return {
    ...state,
    checkedItems: state.checkedItems.filter((id) => id !== action.value),
  };
};

const editedTasks = (state, action) => ({
  ...state,
  tasks: state.tasks.map(({ id, text }) => {
    if (id === action.id) return { id, text: action.text };
    return { id, text };
  }),
});

const onlyDone = (state) => ({
  ...state,
  tasks: state.tasks.filter(({ id }) => (
    state.checkedItems.includes(id))),
});

const onlyToDo = (state) => ({
  ...state,
  tasks: state.tasks.filter(({ id }) => (
    !state.checkedItems.includes(id))),
});

// Reducer code starts below;
const savedTasks = JSON.parse(localStorage.getItem('tasks'));
const savedChecks = JSON.parse(localStorage.getItem('checkedItems'));
const INITIAL_STATE = {
  display: 'all',
  tasks: !savedTasks ? [] : savedTasks,
  checkedItems: !savedChecks ? [] : savedChecks,
};

const listState = (state = INITIAL_STATE, action) => {
  const oneMore = addOneMore(state, action);
  switch (action.type) {
  case DISPLAY_TASKS:
    return { ...state, display: action.value };

  case ADD_ITEM:
    localStorage.setItem('tasks', JSON.stringify(oneMore.tasks));
    return oneMore;

  case REMOVE_ITEM:
    saveTasks(removeItem, state, action);
    return removeItem(state, action);

  case TOGGLE_CHECKED:
    saveCheckedItems(toggleChecked, state, action);
    return toggleChecked(state, action);

  case EDIT:
    if (action.text.trim()) {
      savedTasks(editedTasks, state, action);
      return editedTasks(state, action);
    }
    return state;

  case CLEAR_ALL:
    localStorage.setItem('tasks', JSON.stringify([]));
    localStorage.setItem('checkedItems', JSON.stringify([]));
    return { ...state, tasks: [], checkedItems: [] };

  case CLEAR_TODO:
    saveTasks(onlyDone, state);
    return onlyDone(state);

  case CLEAR_DONE:
    saveTasks(onlyToDo, state);
    localStorage.setItem('checkedItems', JSON.stringify([]));
    return onlyToDo(state);

  default:
    return state;
  }
};

export default listState;
