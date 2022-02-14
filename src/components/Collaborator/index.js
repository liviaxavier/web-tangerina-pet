import React from 'react';
import './index.css'
import avatar_placeholder from '../../images/icon-avatar.png'

function Collaborator({item}) {
  return ( <div className='collaborator'>
    <img src={avatar_placeholder} alt={"Imagem do colaborador"} className='collaborator-avatar'/>
    <p className='collaborator-name'>{item.name}</p>
  </div> );
}

export default Collaborator;