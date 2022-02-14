import React from 'react';
import './index.css'

function SublistItem({item}) {
  return ( <div className='item'>
    {
      item.thumb &&(
      !item.thumb.src ? 
      <div className='background'></div> :
      <img src={item.thumb.src} alt={item.thumb.alt} />)
    }
    <p>{item.name}</p>
  </div> );
}

export default SublistItem;