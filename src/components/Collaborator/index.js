import React from 'react';
import './index.css'

function Collaborator({item}) {
  return ( <div className='collaborator'>
    {
      !item.thumb.src ? 
      <div className='background'></div> :
      <img src={item.thumb.src} alt={item.thumb.alt} />
    }
    <p>{item.name}</p>
  </div> );
}

export default Collaborator;