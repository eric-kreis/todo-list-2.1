/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Creators as BarActions } from '../../redux/reducers/sideBar';

import { ColorPalette, ProfileIcon } from '../../assets/icons';
import SideBarS from './styles';
import ColorModal from './ColorsContainer';

export default function SideBar() {
  const dispatch = useDispatch();

  const active = useSelector(({ sideBar }) => sideBar.active);

  const handleToggleBar = useCallback(() => (
    dispatch(BarActions.toggleBar())), [dispatch]);

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
                Mudar tema
                <ColorModal />
              </div>
            </li>
            <li>
              <Link to="profile">
                <ProfileIcon className="sidebar-icon" />
                Perfil
              </Link>
            </li>
          </ul>
        </footer>
      </aside>
      {active && <button type="button" className="null-container" onClick={handleToggleBar} />}
    </SideBarS>
  );
}
