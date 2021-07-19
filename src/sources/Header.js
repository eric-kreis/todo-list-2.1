import React, { Component } from 'react';
import Switch from 'react-switch';
import { withTheme } from 'styled-components';
import Logo from '../icons/Logo';

import { PageHeader } from '../styles/styledComponents';
import { Sun, Moon } from '../icons/Icons';
import { ThemeButton } from '../styles/styledComponents';
import { ColorPalette } from '../icons/Icons';


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
      <PageHeader>
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
          <ThemeButton onClick={ () => { handleToggleModal('color'); } }>
            <ColorPalette title="Mudar cor" />
          </ThemeButton>
        </div>
      </PageHeader>
    );
  }
}

export default withTheme(Header);
