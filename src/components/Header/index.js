import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { withTheme } from 'styled-components';
import toggleTheme from '../../redux/reducers/changeTheme/actions/toggleTheme';

import Logo from '../../assets/Logo';
import { PageHeaderS, ThemeButtonS } from './styles';
import { Sun, Moon, ColorPalette } from '../../assets/icons';

class Header extends Component {
  render() {
    const {
      theme,
      children,
      toggleTheme: handleToggleTheme,
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
            onChange={ handleToggleTheme }
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

Header.propTypes = {
  theme: PropTypes.shape({
    title: PropTypes.string,
    colors: PropTypes.shape({
      background: PropTypes.string,
    }),
  }).isRequired,
  children: PropTypes.node.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = { toggleTheme };

export default connect(null, mapDispatchToProps)(withTheme(Header));
