import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { Creators as ThemeActions } from '../../redux/reducers/changeTheme';

import Logo from '../../assets/Logo';
import PageHeaderS from './styles';
import { Sun, Moon } from '../../assets/icons';

export default function Header({ children, changeThemeButton }) {
  const { title, colors } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const handleToggleTheme = useCallback(() => (
    dispatch(ThemeActions.toggleTheme())), [dispatch]);

  return (
    <PageHeaderS>
      <Logo />
      <h1>{ children }</h1>
      <div>
        <Switch
          checked={title === 'dark'}
          onChange={handleToggleTheme}
          checkedIcon={<Sun className="sun" />}
          uncheckedIcon={<Moon className="moon" />}
          height={18}
          handleDiameter={26}
          width={50}
          offColor={colors.background}
          onColor={colors.background}
        />
        { changeThemeButton }
      </div>
    </PageHeaderS>
  );
}

Header.defaultProps = {
  changeThemeButton: null,
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  changeThemeButton: PropTypes.node,
};
