import React, { Component } from 'react';

import dataSource from '../../assets/data-sources/links.json';
import Header from '../header/Header';
import {Nav} from '../nav/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [...new Set(dataSource.map((link) => link.context))]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav menus={this.state.menuList} />
      </div>
    );
  }
}

export default App;
