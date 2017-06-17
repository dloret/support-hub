import React from 'react';

import {Tile} from './Tile';
import './Title.css';

export const Title = (props) => {
  return (
    <div className='section'>
      <h2>{props.title}</h2>
      {props.items
        .filter((item) => item.category === props.title)
        .map((item) => <Tile
          key={item.id}
          desc={item.alt}
          id={item.id}
          image={item.image}
          tool={item.tool}
          url={item.url} />)}
    </div>
  )
}