import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function Header({back_to}) {
  return ( <nav>
    {back_to &&  <Link className='back-to' to={back_to}>Voltar</Link> }
    <h1>Tangerina Pet</h1>
    <input type={"search"} placeholder='Ex: Nutricionista vegano, Adestramento positivo' />
  </nav> );
}

export default Header;