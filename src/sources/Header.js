import React, { Component } from 'react';

import { PageHeader } from '../styles/styledComponents';

class Header extends Component {
  render() {
    const { children } = this.props;
    return (
      <PageHeader>
        { children }
      </PageHeader>
    );
  }
}

export default Header;
