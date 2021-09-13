/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  useCallback,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useAuth } from '../../Contexts/AuthContext';
import { Creators as BarActions } from '../../redux/reducers/sideBar';

import { ColorPalette, Logout, ProfileIcon } from '../../assets/icons';
import SideBarS from './styles';
import ColorModal from './ColorsContainer';

export default function SideBar() {
  const { logout } = useAuth();

  const dispatch = useDispatch();

  const active = useSelector(({ sideBar }) => sideBar.active);

  const handleToggleBar = useCallback(() => (
    dispatch(BarActions.toggleBar())), [dispatch]);

  const handleDisableBar = useCallback(() => (
    dispatch(BarActions.disableBar())), [dispatch]);

  useEffect(() => handleDisableBar, [handleDisableBar]);

  return (
    <SideBarS active={active}>
      <aside>
        <ul>
          <li>
            <Link to="profile">
              <ProfileIcon className="sidebar-icon" />
              Perfil
            </Link>
          </li>
        </ul>
        <footer>
          <ul>
            <li>
              <div className="color-handle">
                <ColorPalette className="sidebar-icon" />
                Temas
                <ColorModal />
              </div>
            </li>
            <li>
              <button type="button" onClick={logout} className="aside-btn">
                <Logout className="sidebar-icon" />
                Sair
              </button>
            </li>
          </ul>
        </footer>
      </aside>
      {active && <button type="button" className="null-container" onClick={handleToggleBar} />}
    </SideBarS>
  );
}
