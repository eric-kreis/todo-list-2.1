import { DISPLAY_TASKS } from './actions/displayTasks';
import { ADD_ITEM } from './actions/addItem';
import { REMOVE_ITEM } from './actions/removeItem';
import { TOGGLE_CHECKED } from './actions/toggleCheck';
import { EDIT } from './actions/editBack';
import { CLEAR_ALL } from './actions/clearAll';
import { CLEAR_TODO } from './actions/clearToDo';
import { CLEAR_DONE } from './actions/clearDone';

// Action assistents;
const addOneMore = (state, action) => ([
  ...state.tasks,
  {
    id: Math.ceil(Math.random() * Date.now()),
    text: action.text,
  },
]);

const removeItem = (state, action) => (
  state.tasks.filter(({ id }) => id !== Number(action.id)));

const addChecked = (state, action) => {
  if (action.checked) {
    const { id } = state.tasks.find(({ id: taskId }) => taskId === Number(action.value));
    return [...state.checkedItems, id];
  }
  return state.checkedItems.filter((id) => id !== Number(action.value));
};

const editedTasks = (state, action) => (
  state.tasks.map(({ id, text }) => {
    if (id === action.id) return { id, text: action.text };
    return { id, text };
  })
);

const onlyDone = (state) => state.tasks.filter(({ id }) => (
  state.checkedItems.includes(id)));

const onlyToDo = (state) => state.tasks.filter(({ id }) => (
  !state.checkedItems.includes(id)));

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
    return { ...state, [action.name]: action.value };

  case ADD_ITEM:
    localStorage.setItem('tasks', JSON.stringify(addOneMore(state, action)));
    return {
      ...state,
      tasks: addOneMore(state, action),
    };

  case REMOVE_ITEM:
    localStorage.setItem('tasks', JSON.stringify(removeItem(state, action)));
    return { ...state, tasks: removeItem(state, action) };

  case TOGGLE_CHECKED:
    localStorage.setItem('checkedItems', JSON.stringify(addChecked(state, action)));
    return { ...state, checkedItems: addChecked(state, action) };

  case EDIT:
    if (action.text.trim()) {
      localStorage.setItem('tasks', JSON.stringify(editedTasks(state, action)));
      return { ...state, tasks: editedTasks(state, action) };
    }
    return state;

  case CLEAR_ALL:
    localStorage.setItem('tasks', JSON.stringify([]));
    localStorage.setItem('checkedItems', JSON.stringify([]));
    return { ...state, tasks: [], checkedItems: [] };

  case CLEAR_TODO:
    localStorage.setItem('tasks', JSON.stringify(onlyDone(state)));
    return { ...state, tasks: onlyDone(state) };

  case CLEAR_DONE:
    localStorage.setItem('tasks', JSON.stringify(onlyToDo(state)));
    localStorage.setItem('checkedItems', JSON.stringify([]));
    return { ...state, tasks: onlyToDo(state), checkedItems: [] };

  default:
    return state;
  }
};

export default listState;
