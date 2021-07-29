import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import toggleFocus from '../../../redux/reducers/formInput/actions/toggleFocus';
import controlFormClass from '../../../redux/reducers/formInput/actions/controlFormClass';
import displayTasks from '../../../redux/reducers/listState/actions/displayTasks';
import addItem from '../../../redux/reducers/listState/actions/addItem';

import FormInput from './FormInput';
import {
  MainFormS,
  SectionFormS,
  FormShowButtonS,
} from './styles';
import IconButtonS from '../../../styles/IconButtonS.styles';
import { Add, Trash } from '../../../assets/icons';

class FormContainer extends Component {
  constructor() {
    super();
    this.addTaskRule = this.addTaskRule.bind(this);
  }

  addTaskRule() {
    const {
      taskText,
      controlFormClass: handleControlFormClass,
      toggleFocus: handleToggleFocus,
      addItem: handleAddItem,
    } = this.props;

    if (!taskText.trim()) {
      handleControlFormClass(false);
    } else {
      handleAddItem();
    }
    handleToggleFocus(true);
  }

  render() {
    const {
      display,
      displayTasks: handleDisplayTasks,
      handleToggleModal,
    } = this.props;

    return (
      <MainFormS onSubmit={ (e) => e.preventDefault() }>
        <SectionFormS>
          <FormInput />
          <IconButtonS
            add
            large
            onClick={ this.addTaskRule }
          >
            <Add title="Adicionar tarefa"/>
          </IconButtonS>
          <IconButtonS
            clear
            large
            onClick={ () => {
              handleToggleModal('clear');
            } }
            data-testid="clear-btn"
          >
            <Trash title="Remover Tarefas" />
          </IconButtonS>
        </SectionFormS>
        <SectionFormS>
          <FormShowButtonS
            name="display"
            value="all"
            onClick={ handleDisplayTasks }
            display={ display }
          >
            Todas
          </FormShowButtonS>
          <FormShowButtonS
            name="display"
            value="toDo"
            onClick={ handleDisplayTasks }
            display={ display }
          >
            Pendentes
          </FormShowButtonS>
          <FormShowButtonS
            name="display"
            value="completed"
            onClick={ handleDisplayTasks }
            display={ display }
          >
            Concluídas
          </FormShowButtonS>
        </SectionFormS>
      </MainFormS>
    )
  }
}

const mapStateToProps = ({ listState }) => ({
  display: listState.display,
  taskText: listState.taskText,
});

const mapDispatchToProps = {
  displayTasks,
  toggleFocus,
  controlFormClass,
  addItem
};

FormContainer.propTypes = {
  display: PropTypes.string.isRequired,
  taskText: PropTypes.string.isRequired,
  displayTasks: PropTypes.func.isRequired,
  toggleFocus: PropTypes.func.isRequired,
  controlFormClass: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
