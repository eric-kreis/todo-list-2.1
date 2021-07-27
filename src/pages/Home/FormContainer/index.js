import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Add, Trash } from '../../../icons';

import displayTasks from '../../../redux/actions/displayTasks';

import FormInput from './FormInput';
import {
  MainFormS,
  SectionFormS,
  FormShowButtonS,
} from './styles';
import IconButtonS from '../../../styles/IconButtonS.styles';

class FormContainer extends Component {
  render() {
    const {
      display,
      displayTasks,
      taskText,
      formInputClass,
      mainInputFocus,
      formClassToggle,
      handleAddTask,
      handleChange,
      handleToggleModal,
      handleFocus,
      handleRemoveFocus,
    } = this.props;

    return (
      <MainFormS onSubmit={ (e) => e.preventDefault() }>
        <SectionFormS>
          <FormInput
            name="taskText"
            value={ taskText }
            formInputClass={ formInputClass }
            mainInputFocus={ mainInputFocus }
            handleChange={ handleChange }
            formClassToggle={ formClassToggle }
            handleFocus={ handleFocus }
            handleRemoveFocus={ handleRemoveFocus }
          />
          <IconButtonS
            add
            large
            onClick={ () => {
              handleAddTask();
              handleFocus();
            } }
          >
            <Add title="Adicionar tarefa"/>
          </IconButtonS>
          <IconButtonS
            clear
            large
            onClick={ () => {
              handleToggleModal('clear');
            } }
          >
            <Trash title="Remover Tarefas" />
          </IconButtonS>
        </SectionFormS>
        <SectionFormS>
          <FormShowButtonS
            name="display"
            value="all"
            onClick={ displayTasks }
            display={ display }
          >
            Todas
          </FormShowButtonS>
          <FormShowButtonS
            name="display"
            value="toDo"
            onClick={ displayTasks }
            display={ display }
          >
            Pendentes
          </FormShowButtonS>
          <FormShowButtonS
            name="display"
            value="completed"
            onClick={ displayTasks }
            display={ display }
          >
            Concluídas
          </FormShowButtonS>
        </SectionFormS>
      </MainFormS>
    )
  }
}

const mapStateToProps = ({ changeDisplay }) => ({ display: changeDisplay.display });

const mapDispatchToProps = { displayTasks };

FormContainer.propTypes = {
  display: PropTypes.string.isRequired,
  taskText: PropTypes.string.isRequired,
  formInputClass: PropTypes.string.isRequired,
  mainInputFocus: PropTypes.bool.isRequired,
  formClassToggle: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleRemoveFocus: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
