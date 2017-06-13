import React from 'react';

import './Catalog.css';
import dataSource from '../../assets/data-sources/links.json';
import {Title} from './Title';

const menus = [...new Set(dataSource.map((link) => link.context))];

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: (this.props.location.pathname.slice(1)) ? this.props.location.pathname.slice(1) : menus[0],
      items: '',
      titles: '',
    };
  }

  componentWillMount() {
    this.setState({
      items: dataSource.filter((item) => item.context === this.state.selectedMenu),
      titles: [...new Set(dataSource.filter((item) => item.context === this.state.selectedMenu).map((item) => item.category))],
    })
  }

componentWillReceiveProps(nextProps) {
  if (nextProps.location.pathname.slice(1) !== this.props.location.pathname.slice(1)) {
    this.setState({
      selectedMenu: nextProps.location.pathname.slice(1),
      items: dataSource.filter((item) => item.context === nextProps.location.pathname.slice(1)),
      titles: [...new Set(dataSource.filter((item) => item.context === nextProps.location.pathname.slice(1)).map((item) => item.category))],
    })
  }
}



  render() {
    return (
      <div>
        <ul>
          {this.state.titles.map(
            title => <Title
              key={title}
              title={title}
              items={this.state.items} />
          )}
        </ul>
      </div>
    )
  }
}