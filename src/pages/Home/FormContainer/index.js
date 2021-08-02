import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    this.handleToggleFocus = this.handleToggleFocus.bind(this);
    this.handleToggleFormClass = this.handleToggleFormClass.bind(this);
    this.handleResetFormClass = this.handleResetFormClass.bind(this);
    this.addTaskRule = this.addTaskRule.bind(this);

    this.state = {
      taskText: '',
      formInputClass: 'form-control',
      formFocus: false,
    };
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleToggleFocus(bool = true) {
    this.setState({ formFocus: bool });
  }

  handleToggleFormClass({ target: { value } }) {
    if (!value.trim()) {
      this.setState({
        formInputClass: 'form-control is-invalid',
      });
    } else {
      this.setState({ formInputClass: 'form-control' });
    }
  }

  handleResetFormClass() {
    this.setState({ formInputClass: 'form-control' });
  }

  addTaskRule() {
    const { taskText } = this.state;
    const { handleAddItem } = this.props;

    if (!taskText.trim()) {
      this.setState({
        formInputClass: 'form-control is-invalid',
      });
    } else {
      handleAddItem(taskText);
      this.setState({ taskText: '' });
    }
    this.handleToggleFocus();
  }

  render() {
    const {
      taskText,
      formFocus,
      formInputClass
    } = this.state;
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
            formInputClass={ formInputClass }
            formFocus={ formFocus }
            handleChangeText={ this.handleChange }
            handleToggleFormClass={ this.handleToggleFormClass }
            handleToggleFocus={ this.handleToggleFocus }
            handleResetFormClass={ this.handleResetFormClass }
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
});

FormContainer.propTypes = {
  display: PropTypes.string.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleDisplayTasks: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
