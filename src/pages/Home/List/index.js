import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ListS } from './styles';
import TaskContainer from './TaskContainer';

class List extends React.Component {
  render() {
    const {
      display,
      tasks,
      checkedItems,
    } = this.props;

    let filtredTasks = tasks;
    if (display === 'completed') {
      filtredTasks = tasks.filter(({ id }) => checkedItems.includes(id));
    }
    if (display === 'toDo') {
      filtredTasks = tasks.filter(({ id }) => !checkedItems.includes(id));
    }

    return (
      <ListS>
        {
          filtredTasks.map(({ id, text }) =>
            <TaskContainer
              key={ id }
              id={ id }
              text={ text }
              checkedItems={ checkedItems }
            />
          )
        }
      </ListS>
    );
  }
}

const mapStateToProps = ({ changeDisplay, listState }) => ({
  display: changeDisplay.display,
  tasks: listState.tasks,
  checkedItems: listState.checkedItems,
});

List.propTypes = {
  display: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps, null)(List);
