import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import toggleFocus from '../../../../redux/reducers/formInput/actions/toggleFocus';
import controlFormClass from '../../../../redux/reducers/formInput/actions/controlFormClass';
import toggleFormClass from '../../../../redux/reducers/formInput/actions/toggleFormClass';

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
      handleControlFormClass,
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
          onFocus={ () => { handleToggleFocus(true); } }
          onBlur={ () => { handleToggleFocus(false); handleControlFormClass(); } }
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

const mapStateToProps = ({ formInput, listState }) => ({
  formInputClass: formInput.formInputClass,
  formFocus: formInput.formFocus,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleFormClass: (e) => dispatch(toggleFormClass(e)),
  handleToggleFocus: (formFocus) => dispatch(toggleFocus(formFocus)),
  handleControlFormClass: (valid) => dispatch(controlFormClass(valid)),
});

FormInput.propTypes = {
  formInputClass: PropTypes.string.isRequired,
  formFocus: PropTypes.bool.isRequired,
  taskText: PropTypes.string.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  handleToggleFormClass: PropTypes.func.isRequired,
  handleToggleFocus: PropTypes.func.isRequired,
  handleControlFormClass: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
