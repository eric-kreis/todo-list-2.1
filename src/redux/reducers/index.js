import { combineReducers } from 'redux';
import changeDisplay from './changeDisplay';
import formInput from './formInput';
import listState from './listState';
import changeTheme from './changeTheme';

const rootReducer = combineReducers({
  changeDisplay,
  formInput,
  listState,
  changeTheme,
});

export default rootReducer;
