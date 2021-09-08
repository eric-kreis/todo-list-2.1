import { combineReducers } from 'redux';
import changeTheme from './changeTheme';
import sideBar from './sideBar';

const rootReducer = combineReducers({ changeTheme, sideBar });

export default rootReducer;
