import React, { useState } from 'react';
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

const validClass = 'form-control';
const invalidClass = 'form-control is-invalid';

function FormContainer({
  display,
  handleAddItem,
  handleDisplayTasks,
  handleToggleModal,
}) {
  const [taskText, setTaskText] = useState('');
  const [formInputClass, setInputClass] = useState(validClass);
  const [formFocus, setFormFocus] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setTaskText(value);
  };

  const handleToggleFocus = (bool = true) => {
    setFormFocus(bool);
  };

  const handleToggleFormClass = ({ target: { value } }) => {
    if (!value.trim()) {
      setInputClass(invalidClass);
    } else {
      setInputClass(validClass);
    }
  };

  const handleResetFormClass = () => {
    setInputClass(validClass);
  };

  const addTaskRule = () => {
    if (!taskText.trim()) {
      setInputClass(invalidClass);
    } else {
      handleAddItem(taskText);
      setTaskText('');
    }
    handleToggleFocus();
  };

  return (
    <MainFormS onSubmit={ (e) => e.preventDefault() }>
      <SectionFormS>
        <FormInput
          taskText={ taskText }
          formInputClass={ formInputClass }
          formFocus={ formFocus }
          handleChangeText={ handleChange }
          handleToggleFormClass={ handleToggleFormClass }
          handleToggleFocus={ handleToggleFocus }
          handleResetFormClass={ handleResetFormClass }
        />
        <IconButtonS add large onClick={ addTaskRule }>
          <Add title="Adicionar tarefa" />
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
  );
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
