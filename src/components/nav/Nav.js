import React from 'react';

import './Nav.css';

export const Nav = ({menus}) => {
  return (
    <nav>
      <ul>
        {menus.map(menu => <li key={menu}>{menu}</li>)}
      </ul>
    </nav>
  );
}