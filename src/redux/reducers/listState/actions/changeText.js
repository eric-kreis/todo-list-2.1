export const TASK = 'TASK';

const changeText = ({ target: { value } }) => ({
  type: TASK,
  value,
})

export default changeText;
