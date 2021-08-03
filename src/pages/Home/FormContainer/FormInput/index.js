import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  constructor() {
    super();
    this.changeLabelText = this.changeLabelText.bind(this);

    this.input = React.createRef();
  }

  componentDidUpdate() {
    const { formFocus } = this.props;
    if (formFocus) {
      this.input.current.focus();
    }
  }

  changeLabelText() {
    const { formInputClass } = this.props;
    if (formInputClass !== 'form-control') {
      return 'Escreva para adicionar tarefa';
    }
    return 'Escreva sua tarefa aqui';
  }

  render() {
    const {
      taskText,
      formInputClass,
      handleChangeText,
      handleToggleFormClass,
      handleToggleFocus,
      handleResetFormClass,
    } = this.props;

    const labelText = this.changeLabelText();

    return (
      <div className="form-floating">
        <input
          className={ formInputClass }
          ref={ this.input }
          id="form-input"
          type="text"
          name="taskText"
          value={ taskText }
          onFocus={ handleToggleFocus }
          onBlur={ () => {
            handleToggleFocus(false);
            handleResetFormClass();
          } }
          onChange={ (e) => {
            handleChangeText(e);
            handleToggleFormClass(e);
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

FormInput.propTypes = {
  formInputClass: PropTypes.string.isRequired,
  formFocus: PropTypes.oneOfType([
    PropTypes.object, PropTypes.bool]).isRequired,
  taskText: PropTypes.string.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  handleToggleFormClass: PropTypes.func.isRequired,
  handleToggleFocus: PropTypes.func.isRequired,
  handleResetFormClass: PropTypes.func.isRequired,
};

export default FormInput;
