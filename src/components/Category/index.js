import React from 'react';
import CategoryServices from '../../services/Category';
import './index.css'

function Category({item, children}) {
  return ( <>
    <div className='category-title'>
      <h2>{item.name}</h2>
      <h3>{item.category ? CategoryServices.List().find(category => category.identifier === item.category).name : ''}</h3>
    </div>
    {children}
  </> );
}

export default Category;