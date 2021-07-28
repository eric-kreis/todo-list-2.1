import React, { Component } from 'react';

import PageFooterS from './styles';
import { LinkedIn, GitHub } from '../../assets/icons';

class Footer extends Component {
  render() {
    return (
      <PageFooterS>
        <p>
          Developed by: <a href="https://www.linkedin.com/in/eric-alfinito-kreis/" target="blank">Eric Alfinito Kreis</a>
        </p>
        <div>
          <a href="https://github.com/eric-kreis" target="blank"><GitHub /></a>
          <a href="https://www.linkedin.com/in/eric-alfinito-kreis/" target="blank"><LinkedIn /></a>
        </div>
      </PageFooterS>
    );
  }
}

export default Footer;
