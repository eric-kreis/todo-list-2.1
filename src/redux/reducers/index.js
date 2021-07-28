import { combineReducers } from 'redux';
import formInput from './formInput';
import listState from './listState';
import changeTheme from './changeTheme';

const rootReducer = combineReducers({
  formInput,
  listState,
  changeTheme,
});

export default rootReducer;
