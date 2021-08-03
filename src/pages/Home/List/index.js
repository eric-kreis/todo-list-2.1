import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListS from './styles';
import TaskContainer from './TaskContainer';

function List({ display, tasks, checkedItems }) {
  const filterTasks = () => {
    let filtredTasks = tasks;
    if (display === 'completed') {
      filtredTasks = tasks.filter(({ id }) => checkedItems.includes(id));
    }
    if (display === 'toDo') {
      filtredTasks = tasks.filter(({ id }) => !checkedItems.includes(id));
    }
    return filtredTasks;
  };

  const filtredTasks = filterTasks();
  return (
    <ListS>
      {
        filtredTasks.map(({ id, text }) => (
          <TaskContainer
            key={ id }
            id={ id }
            text={ text }
          />
        ))
      }
    </ListS>
  );
}

const mapStateToProps = ({ listState }) => ({
  display: listState.display,
  tasks: listState.tasks,
  checkedItems: listState.checkedItems,
});

List.propTypes = {
  display: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps)(List);
