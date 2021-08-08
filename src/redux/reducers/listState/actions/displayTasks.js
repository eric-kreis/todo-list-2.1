export const DISPLAY_TASKS = 'DISPLAY_TASKS';

const displayTasks = ({ target: { value } }) => ({
  type: DISPLAY_TASKS, value });

export default displayTasks;
