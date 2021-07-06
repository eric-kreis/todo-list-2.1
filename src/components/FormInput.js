import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor() {
    super();

    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }

  componentDidUpdate() {
    const { mainInputFocus } = this.props;
    if (mainInputFocus) {
      this.input.current.focus();
    }
  }

  render() {
    const {
      id,
      type,
      name,
      value,
      children,
      handleChange,
      handleFocus,
    } = this.props;

    return (
      <section>
        <input
          ref={ this.input }
          id={ id }
          type={ type }
          name={ name }
          value={ value }
          onFocus={ handleFocus }
          onChange={ handleChange }
          placeholder="placeholder"
          autoComplete="off"
        />
        <label htmlFor={ id }>{ children }</label>
      </section>
    );  
  }
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
