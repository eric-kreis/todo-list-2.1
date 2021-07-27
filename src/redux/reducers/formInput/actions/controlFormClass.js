export const RESET_CLASS = 'RESET_CLASS';

const controlFormClass = (valid = true) => ({ type: RESET_CLASS, valid });

export default controlFormClass;
