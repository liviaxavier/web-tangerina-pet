import React from 'react';
import './index.css'

function Header() {
  return ( <nav>
    <h1>Tangerina Pet</h1>
    <input type={"search"} placeholder='Ex: Nutricionista vegano, Adestramento positivo' />
  </nav> );
}

export default Header;