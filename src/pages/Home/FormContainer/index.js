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
    this.handleChange = this.handleChange.bind(this);
    this.addTaskRule = this.addTaskRule.bind(this);

    this.state = {
      taskText: '',
    };
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  addTaskRule() {
    const { taskText } = this.state;
    const {
      handleControlFormClass,
      handleToggleFocus,
      handleAddItem,
    } = this.props;
  
    if (!taskText.trim()) {
      handleControlFormClass(false);
    } else {
      handleAddItem(taskText);
      this.setState({ taskText: '' });
    }
    handleToggleFocus(true);
  }

  render() {
    const { taskText } = this.state;
    const {
      display,
      handleDisplayTasks,
      handleToggleModal,
    } = this.props;

    return (
      <MainFormS onSubmit={ (e) => e.preventDefault() }>
        <SectionFormS>
          <FormInput
            taskText={ taskText }
            handleChangeText={ this.handleChange }
          />
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

const mapDispatchToProps = (dispatch) => ({
  handleAddItem: (text) => dispatch(addItem(text)),
  handleDisplayTasks: (e) => dispatch(displayTasks(e)),
  handleToggleFocus: (formFocus) => dispatch(toggleFocus(formFocus)),
  handleControlFormClass: (valid) => dispatch(controlFormClass(valid)),
});

FormContainer.propTypes = {
  display: PropTypes.string.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleDisplayTasks: PropTypes.func.isRequired,
  handleToggleFocus: PropTypes.func.isRequired,
  handleControlFormClass: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
