import React from 'react';
import { Collaborator } from '../../components';
import './index.css'

function CollaboratorList({list}) {
  if(!list || list.length === 0) return 'Lista vazia'
  return ( <section className='collaborator-list'>
    {list.map(
      (item, key) => <Collaborator item={item} key={key} />
    )} 

  </section> 
  );
}

export default CollaboratorList;