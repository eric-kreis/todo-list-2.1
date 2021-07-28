export const CHANGE_COLOR = 'CHANGE-COLOR';

const changeColor = ({ target: { value } }) => ({
  type: CHANGE_COLOR, value });

export default changeColor;
