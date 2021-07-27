import { FORM_CLASS } from './actions/toggleFormClass';
import { FOCUS } from './actions/toggleFocus';
import { RESET_CLASS } from './actions/controlFormClass';

const INITIAL_STATE = {
  formInputClass: 'form-control',
  formFocus: false,
};

const changeFormClass = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_CLASS:
      if (action.value.trim()) {
        return { ...state, formInputClass: 'form-control' };
      }
      return { ...state, formInputClass: 'form-control is-invalid' };

    case RESET_CLASS:
      return action.valid
        ? { ...state, formInputClass: 'form-control' }
        : {...state, formInputClass: 'form-control is-invalid'}
  
    case FOCUS:
      return { ...state, formFocus: action.formFocus };

    default:
      return state;
  }
}

export default changeFormClass;
