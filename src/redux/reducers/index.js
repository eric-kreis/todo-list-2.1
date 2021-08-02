import { combineReducers } from 'redux';
import listState from './listState';
import changeTheme from './changeTheme';

const rootReducer = combineReducers({
  listState,
  changeTheme,
});

export default rootReducer;
