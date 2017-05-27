import React from 'react';

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
            >{menu}</li>
          );
        })}
      </ul>
    </nav>
  );
}