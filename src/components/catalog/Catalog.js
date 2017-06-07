import React from 'react';

import './Catalog.css';
import dataSource from '../../assets/data-sources/links.json';

const menus = [...new Set(dataSource.map((link) => link.context))];

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: (this.props.location.pathname.slice(1)) ? this.props.location.pathname.slice(1) : menus[0],
      titles: '',
    };
  }

  render() {
    return (
      <div>
        Catalog!
      </div>
    )
  }
}