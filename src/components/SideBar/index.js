import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as BarActions } from '../../redux/reducers/sideBar';

import { Menu, ProfileIcon } from '../../assets/icons';
import SideBarS from './styles';

export default function SideBar() {
  const dispatch = useDispatch();
  const active = useSelector(({ sideBar }) => sideBar.active);

  const handleToggleBar = useCallback(() => (
    dispatch(BarActions.toggleBar())), [dispatch]);

  return (
    <SideBarS active={active}>
      <button type="button" onClick={handleToggleBar}>
        <Menu />
      </button>
      <ul>
        <li>
          <Link to="profile">
            <ProfileIcon className="sidebar-icon" />
            {active && ' Perfil'}
            <span className="my-tooltip">Perfil</span>
          </Link>
        </li>
        {/* <li>
          <Link to="profile">
            <ProfileIcon className="sidebar-icon" />
            {active && ' Perfil'}
            <span className="my-tooltip">Perfil</span>
          </Link>
        </li>
        <li>
          <Link to="profile">
            <ProfileIcon className="sidebar-icon" />
            {active && ' Perfil'}
            <span className="my-tooltip">Perfil</span>
          </Link>
        </li> */}
      </ul>
    </SideBarS>
  );
}
