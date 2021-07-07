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
      handleFocus,
      handleRemoveFocus,
      handleChange,
      formInputClass,
    } = this.props;

    let labelText = 'Escreva sua tarefa aqui';

    if (formInputClass !== 'form-control') {
      labelText = 'Este campo não pode estar vazio';
    }

    return (
      <section className="form-floating mb3">
        <input
          className={ formInputClass }
          ref={ this.input }
          id="form-input"
          type={ type }
          name={ name }
          value={ value }
          onFocus={ handleFocus }
          onBlur={ handleRemoveFocus }
          onChange={ handleChange }
          placeholder="placeholder"
          autoComplete="off"
        />
        <label htmlFor="form-input">{ labelText }</label>
      </section>
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
  handleChange: PropTypes.func.isRequired,
};

export default FormInput;
