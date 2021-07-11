import React, { Component } from 'react';
import Switch from 'react-switch';

import { PageHeader } from '../styles/styledComponents';

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
          checkedIcon={ false }
          uncheckedIcon={ false }
          height={ 12 }
          handleDiameter={ 24 }
          width={ 40 }
          offColor="#7C7C7C"
          onColor="#EEE5E9"
        />
      </PageHeader>
    );
  }
}

export default Header;
