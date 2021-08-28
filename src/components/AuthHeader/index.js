import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/Logo';
import AuthHeaderS from './styles';

export default function AuthHeader({ children }) {
  return (
    <AuthHeaderS>
      <Logo />
      <h4>{ children }</h4>
    </AuthHeaderS>
  );
}

AuthHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
