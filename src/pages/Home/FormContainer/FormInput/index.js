import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import toggleFocus from '../../../../redux/reducers/formInput/actions/toggleFocus';
import changeText from '../../../../redux/reducers/listState/actions/changeText';
import controlFormClass from '../../../../redux/reducers/formInput/actions/controlFormClass';
import toggleFormClass from '../../../../redux/reducers/formInput/actions/toggleFormClass';

class FormInput extends Component {
  constructor() {
    super();
    this.enableAdd = this.enableAdd.bind(this);

    this.input = React.createRef();
  }

  componentDidUpdate() {
    const { formFocus } = this.props;
    if (formFocus) {
      this.input.current.focus();
    }
  }

  enableAdd(taskText) {
    const { possibleToAdd } = this.props;
    if (!taskText.trim()) {
      possibleToAdd(false);
    } else {
      possibleToAdd(true);
    }
  }

  render() {
    const {
      taskText,
      formInputClass,
      changeText,
      toggleFocus,
      controlFormClass,
      toggleFormClass,
    } = this.props;

    let labelText = 'Escreva sua tarefa aqui';

    if (formInputClass !== 'form-control') {
      labelText = 'Este campo não pode estar vazio';
    }

    return (
      <div className="form-floating">
        <input
          className={ formInputClass }
          ref={ this.input }
          id="form-input"
          type="text"
          name="taskText"
          value={ taskText }
          onFocus={ () => { toggleFocus(true); } }
          onBlur={ () => { toggleFocus(false); controlFormClass(); } }
          onChange={ (e) => {
            changeText(e);
            toggleFormClass(e);
          } }
          placeholder="placeholder"
          autoComplete="off"
          maxLength={ 120 }
        />
        <label htmlFor="form-input">{ labelText }</label>
      </div>
    );  
  }
}

const mapStateToProps = ({ formInput, listState }) => ({
  formInputClass: formInput.formInputClass,
  formFocus: formInput.formFocus,
  taskText: listState.taskText,
});

const mapDispatchToProps = {
  toggleFormClass,
  toggleFocus,
  controlFormClass,
  changeText,
};

FormInput.propTypes = {
  formInputClass: PropTypes.string.isRequired,
  formFocus: PropTypes.bool.isRequired,
  taskText: PropTypes.string.isRequired,
  toggleFocus: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired,
  controlFormClass: PropTypes.func.isRequired,
  toggleFormClass: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);