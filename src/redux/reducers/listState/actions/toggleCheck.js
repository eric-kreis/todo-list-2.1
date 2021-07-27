export const TOGGLE_CHECKED = 'TOGGLE_CHECKED';

const toggleCheck = ({ target: { value, checked } }) => ({
  type: TOGGLE_CHECKED,
  value,
  checked,
});

export default toggleCheck;
