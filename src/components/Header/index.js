import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import toggleTheme from '../../redux/reducers/changeTheme/actions/toggleTheme';

import Logo from '../../assets/Logo';
import { PageHeaderS, ThemeButtonS } from './styles';
import { Sun, Moon, ColorPalette } from '../../assets/icons';

export default function Header({ children, handleToggleModal }) {
  const { title, colors } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const handleToggleTheme = useCallback(() => (
    dispatch(toggleTheme())), [dispatch]);

  return (
    <PageHeaderS>
      <Logo />
      { children }
      <div>
        <Switch
          checked={ title === 'dark' }
          onChange={ handleToggleTheme }
          checkedIcon={ <Sun className="sun" /> }
          uncheckedIcon={ <Moon className="moon" /> }
          height={ 18 }
          handleDiameter={ 26 }
          width={ 50 }
          offColor={ colors.background }
          onColor={ colors.background }
        />
        <ThemeButtonS
          onClick={ () => { handleToggleModal('color'); } }
        >
          <ColorPalette title="Mudar cor" />
        </ThemeButtonS>
      </div>
    </PageHeaderS>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
