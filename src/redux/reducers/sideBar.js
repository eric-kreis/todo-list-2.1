import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  toggleBar: [],
  disableBar: [],
});

const INITIAL_STATE = {
  active: false,
};

const toggle = (state = INITIAL_STATE) => ({ ...state, active: !state.active });

const disable = (state = INITIAL_STATE) => ({ ...state, active: false });

export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_BAR]: toggle,
  [Types.DISABLE_BAR]: disable,
});
