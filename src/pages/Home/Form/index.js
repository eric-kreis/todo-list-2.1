import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Add, Trash } from '../../../icons';

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
      show,
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
            name="show"
            value="all"
            onClick={ handleChange }
            show={ show }
          >
            Todas
          </FormShowButtonS>
          <FormShowButtonS
            name="show"
            value="toDo"
            onClick={ handleChange }
            show={ show }
          >
            Pendentes
          </FormShowButtonS>
          <FormShowButtonS
            name="show"
            value="completed"
            onClick={ handleChange }
            show={ show }
          >
            Concluídas
          </FormShowButtonS>
        </SectionFormS>
      </MainFormS>
    )
  }
}

FormContainer.propTypes = {
  show: PropTypes.string.isRequired,
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

export default FormContainer;
