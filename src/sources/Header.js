import React, { Component } from 'react';
import Switch from 'react-switch';

import { PageHeader } from '../styles/styledComponents';
import { Sun, Moon } from './Icons';
import { ThemeButton } from '../styles/styledComponents';
import { PaintBrush } from '../sources/Icons';


class Header extends Component {
  render() {
    const {
      children,
      theme,
      toggleTheme,
      toggleModal,
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
            offColor="#EEE5E9"
            onColor="#7C7C7C"
          />
          <ThemeButton onClick={ toggleModal }>
            <PaintBrush />
          </ThemeButton>
        </div>
      </PageHeader>
    );
  }
}

export default Header;
