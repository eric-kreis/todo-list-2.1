import React, { Component } from 'react';

import { PageFooter } from '../styles/styledComponents';
import { LinkedIn, GitHub } from '../icons/Icons';

class Footer extends Component {
  render() {
    return (
      <PageFooter>
        <p>
          Developed by: <a href="https://www.linkedin.com/in/eric-alfinito-kreis/" target="blank">Eric Alfinito Kreis</a>
        </p>
        <div>
          <a href="https://github.com/eric-kreis" target="blank"><GitHub /></a>
          <a href="https://www.linkedin.com/in/eric-alfinito-kreis/" target="blank"><LinkedIn /></a>
        </div>
      </PageFooter>
    );
  }
}

export default Footer;
