import { DISPLAY_TASKS } from '../actions/displayTasks';

const INITIAL_STATE = {
  display: 'all',
};

const changeDisplay = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY_TASKS:
      return { ...state, [action.name]: action.value }
    default:
      return state;
  }
};

export default changeDisplay;
