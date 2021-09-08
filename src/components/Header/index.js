import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { Creators as ThemeActions } from '../../redux/reducers/changeTheme';
import { Creators as BarActions } from '../../redux/reducers/sideBar';

import Logo from '../../assets/Logo';
import PageHeaderS from './styles';
import { Sun, Moon, Menu } from '../../assets/icons';

export default function Header({ children }) {
  const { title, colors } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const handleToggleTheme = useCallback(() => (
    dispatch(ThemeActions.toggleTheme())), [dispatch]);

  const handleToggleBar = useCallback(() => (
    dispatch(BarActions.toggleBar())), [dispatch]);

  return (
    <PageHeaderS>
      <div className="icon-container">
        <button type="button" onClick={handleToggleBar}>
          <Menu />
        </button>
        <Logo />
      </div>
      <h1>{ children }</h1>
      <div className="icon-container">
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
      </div>
    </PageHeaderS>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
