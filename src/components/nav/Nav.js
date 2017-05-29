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
          <Link to={menu} key={menu}><li
            onClick={changeMenu.bind(null, menu)}
            className={(menu === selectedMenu) ? 'active' : null}
          >{menu}</li></Link>
        );
      })}
      </ul>
    </nav>
  );
}