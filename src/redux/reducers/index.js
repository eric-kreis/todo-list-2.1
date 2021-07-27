import { combineReducers } from 'redux';
import changeDisplay from './changeDisplay';
import formInput from './formInput';
import listState from './listState';

const rootReducer = combineReducers({
  changeDisplay,
  formInput,
  listState,
});

export default rootReducer;
