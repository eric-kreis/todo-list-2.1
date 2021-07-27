import React, { Component } from 'react';
import Switch from 'react-switch';
import { withTheme } from 'styled-components';

import Logo from '../../assets/Logo';
import { PageHeaderS, ThemeButtonS } from './styles';
import { Sun, Moon, ColorPalette } from '../../icons';

class Header extends Component {
  render() {
    const {
      theme,
      children,
      toggleTheme,
      handleToggleModal,
    } = this.props;

    const { title, colors } = theme;

    return (
      <PageHeaderS>
        <Logo />
        { children }
        <div>
          <Switch
            checked={ title === 'dark' }
            onChange={ toggleTheme }
            checkedIcon={ <Sun className="sun"/> }
            uncheckedIcon={ <Moon className="moon"/> }
            height={ 18 }
            handleDiameter={ 26 }
            width={ 50 }
            offColor={ colors.background }
            onColor={ colors.background }
          />
          <ThemeButtonS onClick={ () => { handleToggleModal('color'); } }>
            <ColorPalette title="Mudar cor" />
          </ThemeButtonS>
        </div>
      </PageHeaderS>
    );
  }
}

export default withTheme(Header);
