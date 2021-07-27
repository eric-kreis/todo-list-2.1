import { TASK } from './actions/changeText';
import { ADD_ITEM } from './actions/addItem';
import { REMOVE_ITEM } from './actions/removeItem';
import { TOGGLE_CHECKED } from './actions/toggleCheck';
import { EDIT } from './actions/editBack';
import { CLEAR_ALL } from './actions/clearAll';
import { CLEAR_TODO } from './actions/clearToDo';
import { CLEAR_DONE } from './actions/clearDone';

const savedTasks = JSON.parse(localStorage.getItem('tasks'));
const savedChecks = JSON.parse(localStorage.getItem('checkedItems'));

const INITIAL_STATE = {
  taskText: '',
  tasks: !savedTasks ? [] : savedTasks,
  checkedItems: !savedChecks ? [] : savedChecks, 
};

const listState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TASK:
      return { ...state, taskText: action.value };

    case ADD_ITEM:
      const newTasks = [...state.tasks,
        {
          id: Math.ceil(Math.random() * 1000),
          text: state.taskText,
        }
      ];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks,
        taskText: '',
      };

    case REMOVE_ITEM:
      const withoutItem = state.tasks.filter(({ id }) => id !== action.id);
      localStorage.setItem('tasks', JSON.stringify(withoutItem));
      return { ...state, tasks: withoutItem };

    case TOGGLE_CHECKED:
      if (action.checked) {
        const { id } = state.tasks.find(({ id }) => id === Number(action.value));
        const addingChecked = [...state.checkedItems, id];
        localStorage.setItem('checkedItems', JSON.stringify(addingChecked))
        return { ...state, checkedItems: addingChecked };
      }
      const removingItem = state.checkedItems.filter((id) => id !== Number(action.value));
      localStorage.setItem('checkedItems', JSON.stringify(removingItem));
      return { ...state, checkedItems: removingItem };

    case EDIT:
      if(action.text.trim()) {
        const tasksCopy = state.tasks.map(({ id, text }) => {
          if (id === action.id) return { id, text: action.text };
          return { id, text };
        });
        localStorage.setItem('tasks', JSON.stringify(tasksCopy));
        console.log(tasksCopy)
        return { ...state, tasks: tasksCopy };
      }
      return state;

    case CLEAR_ALL:
      localStorage.setItem('tasks', JSON.stringify([]));
      localStorage.setItem('checkedItems', JSON.stringify([]));
      return { ...state, tasks: [], checkedItems: [] };

    case CLEAR_TODO:
      const onlyDone = state.tasks.filter(({ id }) =>
        state.checkedItems.includes(id));
      localStorage.setItem('tasks', JSON.stringify(onlyDone));
      return { ...state, tasks: onlyDone };

    case CLEAR_DONE:
      const onlyToDo = state.tasks.filter(({ id }) =>
        !state.checkedItems.includes(id));
      localStorage.setItem('tasks', JSON.stringify(onlyToDo));
      localStorage.setItem('checkedItems', JSON.stringify([]));
      return { ...state, tasks: onlyToDo, checkedItems: [] };
  
    default:
      return state;
  }
};

export default listState;
