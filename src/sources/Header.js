import React, { Component } from 'react';
import Switch from 'react-switch';
import { withTheme } from 'styled-components';

import { PageHeader } from '../styles/styledComponents';
import { Sun, Moon } from './Icons';
import { ThemeButton } from '../styles/styledComponents';
import { PaintBrush } from '../sources/Icons';


class Header extends Component {
  render() {
    const {
      theme,
      children,
      toggleTheme,
      handleToggleModal,
    } = this.props;

    return (
      <PageHeader>
        LINKS
        { children }
        <div>
          <Switch
            checked={ theme.title === 'dark' }
            onChange={ toggleTheme }
            checkedIcon={ <Sun className="sun"/> }
            uncheckedIcon={ <Moon className="moon"/> }
            height={ 18 }
            handleDiameter={ 26 }
            width={ 50 }
            offColor={ theme.colors.background }
            onColor={ theme.colors.background }
          />
          <ThemeButton onClick={ () => { handleToggleModal('color'); } }>
            <PaintBrush />
          </ThemeButton>
        </div>
      </PageHeader>
    );
  }
}

export default withTheme(Header);
