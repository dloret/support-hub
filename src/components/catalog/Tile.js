import React from 'react';

import image from '../../assets/images/placeholder.png';
import './Tile.css';

export const Tile = (props) => {
  return (
    <div className='tile'>
      <a href={props.url} target='_blank' rel='noopener noreferrer'>
        <h3>{props.tool}</h3>
        <p className='id'>{props.id}</p>
        <img src={image} alt={props.desc} />
        <p>{props.desc}</p>
      </a>
    </div>
  )
}