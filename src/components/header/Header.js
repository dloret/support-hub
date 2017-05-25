import React from 'react';

import dataSource from '../../assets/data-sources/links.json';
import {Nav} from './Nav';
import logo from '../../assets/images/companyLogo.png';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [...new Set(dataSource.map((link) => link.context))]
    }
  }

  render () {
    return (
      <div>
        <img src={logo} alt='company logo'/>
        <Nav menus={this.state.menuList} />
      </div>
    );
  }
}