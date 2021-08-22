import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function EmailInput({
  value,
  className,
  onChange,
  children,
}) {
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div className="form-floating">
      <input
        id="sign-email"
        ref={ input }
        type="text"
        value={ value }
        className={ className }
        placeholder=" "
        onChange={ onChange }
      />
      <label htmlFor="sign-email">{ children }</label>
    </div>
  );
}

EmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
