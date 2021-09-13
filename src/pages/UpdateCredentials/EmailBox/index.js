import React from 'react';
import PropTypes from 'prop-types';

import EmailInput from '../../../components/EmailInput';

export default function EmailBox({
  emailValue,
  emailClass,
  validClass,
  handleValidateEmail,
}) {
  return (
    <EmailInput
      name="sign"
      value={emailValue}
      className={emailClass}
      onChange={handleValidateEmail}
    >
      { emailClass === validClass ? 'E-mail' : 'Digite um e-mail válido' }
    </EmailInput>
  );
}

EmailBox.propTypes = {
  emailValue: PropTypes.string.isRequired,
  emailClass: PropTypes.string.isRequired,
  validClass: PropTypes.string.isRequired,
  handleValidateEmail: PropTypes.func.isRequired,
};
