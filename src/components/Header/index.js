import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function Header({back_to, list_to_search, search_callback}) {
  return ( <nav>
    {back_to &&  <Link className='back-to' to={back_to}>Voltar</Link> }
    <h1>Tangerina Pet</h1>
    <input type={"search"} placeholder='Ex: Nutricionista vegano, Adestramento positivo' 
    onChange={e => SearchTermOnList({
      term: e.target.value,
      list: list_to_search,
      search_callback
    })} />
  </nav> );
}

export default Header;

function SearchTermOnList({term, list, search_callback}){
  if(!term) return search_callback(null)
  search_callback(list.filter(item => (item.name).toUpperCase().includes(term.toUpperCase())))
}