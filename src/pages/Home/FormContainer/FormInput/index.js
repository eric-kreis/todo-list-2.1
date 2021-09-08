import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function FormInput({
  formInputClass,
  formFocus,
  taskText,
  handleChange,
  handleToggleFormClass,
  handleToggleFocus,
  handleResetFormClass,
}) {
  const input = useRef();

  useEffect(() => {
    if (formFocus) {
      input.current.focus();
    }
  }, [formFocus]);

  const changeLabelText = () => {
    if (formInputClass !== 'form-control') {
      return 'Escreva algo :(';
    }
    return 'Escreva aqui :)';
  };

  return (
    <div className="form-floating">
      <input
        className={formInputClass}
        ref={input}
        id="form-input"
        type="text"
        name="taskText"
        value={taskText}
        onFocus={handleToggleFocus}
        onBlur={() => {
          handleToggleFocus(false);
          handleResetFormClass();
        }}
        onChange={(e) => {
          handleChange(e);
          handleToggleFormClass(e);
        }}
        placeholder=" "
        autoComplete="off"
        maxLength={120}
      />
      <label htmlFor="form-input">{ changeLabelText() }</label>
    </div>
  );
}

FormInput.propTypes = {
  formInputClass: PropTypes.string.isRequired,
  formFocus: PropTypes.oneOfType([
    PropTypes.object, PropTypes.bool]).isRequired,
  taskText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleToggleFormClass: PropTypes.func.isRequired,
  handleToggleFocus: PropTypes.func.isRequired,
  handleResetFormClass: PropTypes.func.isRequired,
};
