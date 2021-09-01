import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Logo from '../../assets/Logo';
import AuthHeaderS from './styles';

export default function AuthHeader({ children }) {
  const { colors: { input } } = useContext(ThemeContext);

  return (
    <AuthHeaderS>
      <Logo color={input} />
      <h4>{ children }</h4>
    </AuthHeaderS>
  );
}

AuthHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
