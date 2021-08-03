import React, { useContext } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import toggleTheme from '../../redux/reducers/changeTheme/actions/toggleTheme';

import Logo from '../../assets/Logo';
import { PageHeaderS, ThemeButtonS } from './styles';
import { Sun, Moon, ColorPalette } from '../../assets/icons';

function Header({
  children,
  handleToggleModal,
  handleToggleTheme,
}) {
  const { title, colors } = useContext(ThemeContext);

  return (
    <PageHeaderS>
      <Logo />
      { children }
      <div>
        <Switch
          checked={ title === 'dark' }
          onChange={ handleToggleTheme }
          checkedIcon={ <Sun className="sun" /> }
          uncheckedIcon={ <Moon className="moon" /> }
          height={ 18 }
          handleDiameter={ 26 }
          width={ 50 }
          offColor={ colors.background }
          onColor={ colors.background }
        />
        <ThemeButtonS
          data-testid="color-btn"
          onClick={ () => { handleToggleModal('color'); } }
        >
          <ColorPalette title="Mudar cor" />
        </ThemeButtonS>
      </div>
    </PageHeaderS>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  handleToggleTheme: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleToggleTheme: () => dispatch(toggleTheme()),
});

export default connect(null, mapDispatchToProps)(Header);
