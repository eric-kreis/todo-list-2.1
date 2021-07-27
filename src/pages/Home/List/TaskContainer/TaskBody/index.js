import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import removeItem from '../../../../../redux/reducers/listState/actions/removeItem';

import TaskSection from './TaskSection';
import { TaskBodyS, TaskButtonS } from './styles';
import IconButtonS from '../../../../../styles/IconButtonS.styles';
import { Edit, Remove } from '../../../../../icons';

class TaskBody extends Component {
  render() {
    const {
      id,
      text,
      removeItem,
      handleToggleEdit,
    } = this.props;

    return (
      <TaskBodyS>
        <TaskSection
          id={ id }
        >
          { text }
        </TaskSection>
        <TaskButtonS>
          <IconButtonS
            medium
            onClick={ () => { handleToggleEdit(); } }
          >
            <Edit title="Editar tarefa" />
          </IconButtonS>
          <IconButtonS
            medium
            clear
            onClick={ () => { removeItem(id); } }
          >
            <Remove title="Remover tarefa" />
          </IconButtonS>
        </TaskButtonS>
      </TaskBodyS>
    );
  }
}

const mapDispatchToProps = { removeItem };

TaskBody.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
  handleToggleEdit: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TaskBody);
