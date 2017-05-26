import React from 'react';

import logo from '../../assets/images/companyLogo.png';
import './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateHour: new Date().toString()
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        dateHour: new Date().toString()
      })
    }, 1000);
  }
  render () {
    return (
      <header>
        <img src={logo} alt='company logo'/>
        <h1>Support team webpages</h1>
        <h2>{this.state.dateHour}</h2>
      </header>
    );
  }
}