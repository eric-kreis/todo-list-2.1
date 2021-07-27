export const DISPLAY_TASKS = 'DISPLAY_TASKS';

const displayTasks = ({ target: { value, name } }) => ({
  type: DISPLAY_TASKS, value, name });

export default displayTasks;
