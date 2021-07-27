export const FORM_CLASS = 'FORM-CLASS';

const toggleFormClass = ({ target: { value } }) => ({ type: FORM_CLASS, value });

export default toggleFormClass;
