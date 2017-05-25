import React from 'react';

const navStyles = {
  listStyleType: 'none'
}

export const Nav = ({menus}) => {
  return (
    <nav>
      <ul>
        {menus.map(menu => <li 
          key={menu}
          style={navStyles}>{menu}
        </li>)}
      </ul>
    </nav>
  );
}