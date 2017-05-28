import React from 'react';
import {Link} from 'react-router-dom';

import './Nav.css';

export const Nav = ({menus, selectedMenu, updateMenu}) => {
  const changeMenu = (menu) => updateMenu(menu);

  return (
    <nav>
      <ul>
      {menus.map(menu => {
        return (
          <li
            key={menu}
            onClick={changeMenu.bind(null, menu)}
            className={(menu === selectedMenu) ? 'active' : null}
          ><Link to={menu}>{menu}</Link></li>
        );
      })}
      </ul>
    </nav>
  );
}