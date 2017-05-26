import React from 'react';

import logo from '../../assets/images/companyLogo.png';
import './Header.css';

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <img src={logo} alt='company logo'/>
        <h1>Support team webpages</h1>
      </header>
    );
  }
}