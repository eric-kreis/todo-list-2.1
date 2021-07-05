import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      id,
      type,
      name,
      value,
      handleChange,
      children,
    } = this.props;

    return (
      <section>
        <input
          id={ id }
          type={ type }
          name={ name }
          value={ value }
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
