import React, { Component } from 'react';
import Switch from 'react-switch';

import { PageHeader } from '../styles/styledComponents';
import { Sun, Moon } from './Icons';

class Header extends Component {
  render() {
    const {
      children,
      theme,
      toggleTheme,
    } = this.props;

    return (
      <PageHeader>
        LINKS
        { children }
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
      </PageHeader>
    );
  }
}

export default Header;
