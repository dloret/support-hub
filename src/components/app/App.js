import React, { Component } from 'react';

import dataSource from '../../assets/data-sources/links.json';
import Header from '../header/Header';
import { Nav } from '../nav/Nav';
import { Routes } from '../routes/Routes';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [...new Set(dataSource.map((link) => link.context))],
      selectedMenu: ''
    }
  }

  componentWillMount() {
    this.setState({
      selectedMenu: this.state.menuList[0]
    });
  }

  updateSelectedMenu = (menu) => this.setState({
    selectedMenu: menu
  })

  render() {
    return (
      <Routes selectedMenu={this.state.selectedMenu}>
        <Header />
        <Nav menus={this.state.menuList}
          selectedMenu={this.state.selectedMenu}
          updateMenu={this.updateSelectedMenu} />
      </Routes>
    );
  }
}

export default App;
