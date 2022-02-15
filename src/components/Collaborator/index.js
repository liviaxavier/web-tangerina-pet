import React, { useState } from 'react';
import './index.css'
import avatar_placeholder from '../../images/icon-avatar.png'

function Collaborator({item}) {
  const [isOpen, openDetails] = useState(false)
  return ( <div className='collaborator'>
    <img src={avatar_placeholder} alt={"Imagem do colaborador"} className='collaborator-avatar'/>
    <div className='collaborator-display'>
      <p className='collaborator-name'>{item.name}</p>
      <small className='collaborator-highlight'>{item.highlight}</small>
      <small className='collaborator-state'>{item.state === 'open' ? 'Aberto' : 'Fechado'}</small>
      <div className='collaborator-infos'>
      </div>
      <div className='collaborator-contacts'>
        <p title='Ligar para 99 99999 9999'>t</p>
        <p title='Enviar mensagem para 99 99999 9999'>m</p>
        <p title="Enviar e-mail para email@email.com">e</p>
      </div>
    </div>
    <p className={`collaborator-description ${isOpen ? 'open' : ''}`}>{item.description}</p>
    <p className={`collaborator-more`} onClick={() => openDetails(!isOpen)}>{`${isOpen ? 'Esconder' : 'Saiba mais'}`}</p>
  </div> );
}

export default Collaborator;