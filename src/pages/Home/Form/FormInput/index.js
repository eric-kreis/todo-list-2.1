import React, { Component } from 'react';
import PropTypes from 'prop-types';
class FormInput extends Component {
  constructor() {
    super();

    this.input = React.createRef();
  }

  componentDidUpdate() {
    const { mainInputFocus } = this.props;
    if (mainInputFocus) {
      this.input.current.focus();
    }
  }

  render() {
    const {
      type,
      name,
      value,
      formInputClass,
      handleChange,
      formClassToggle,
      handleFocus,
      handleRemoveFocus,
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
          type={ type }
          name={ name }
          value={ value }
          onFocus={ handleFocus }
          onBlur={ handleRemoveFocus }
          onChange={ (e) => { handleChange(e); formClassToggle(e); } }
          placeholder="placeholder"
          autoComplete="off"
          maxLength={ 120 }
        />
        <label htmlFor="form-input">{ labelText }</label>
      </div>
    );  
  }
}

FormInput.defaultProps = {
  type: 'text',
};

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleRemoveFocus: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formClassToggle: PropTypes.func.isRequired,
  formInputClass: PropTypes.string.isRequired,
};

export default FormInput;
