import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  toggleBar: [],
});

const INITIAL_STATE = {
  active: false,
};

const toggle = (state = INITIAL_STATE) => ({ ...state, active: !state.active });

export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_BAR]: toggle,
});
