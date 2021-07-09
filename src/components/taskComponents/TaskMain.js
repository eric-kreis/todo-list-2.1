import React, { Component } from 'react';

import TaskSection from './TaskSection';
import {
  TaskBody,
  TaskButtons,
  IconsButtons
} from '../../styles/styledComponents';
import { Edit, Remove } from '../../sources/Icons';

class TaskMain extends Component {
  render() {
    const {
      id,
      text,
      checkedItems,
      handleToggleCheck,
      handleToggleEdit,
      handleRemoveFocus,
      handleRemoveItem,
    } = this.props;

    return (
      <TaskBody>
        <TaskSection
          id={ id }
          checkedItems={ checkedItems }
          handleToggleCheck={ handleToggleCheck }
        >
          { text }
        </TaskSection>
        <TaskButtons>
          <IconsButtons
            medium
            onClick={ () => {
              handleRemoveFocus();
              handleToggleEdit();
            } }
          >
            <Edit />
          </IconsButtons>
          <IconsButtons
            medium
            clear
            onClick={ () => {
              handleRemoveFocus();
              handleRemoveItem(id);
            } }
          >
            <Remove />
          </IconsButtons>
        </TaskButtons>
      </TaskBody>
    );
  }
}

export default TaskMain;
