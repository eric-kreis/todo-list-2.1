import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function EmailInput({
  name,
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
        id={`email-${name}`}
        ref={input}
        type="text"
        value={value}
        className={className}
        placeholder=" "
        onChange={onChange}
      />
      <label htmlFor={`email-${name}`}>{ children }</label>
    </div>
  );
}

EmailInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
