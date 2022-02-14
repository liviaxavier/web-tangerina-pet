import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../../components/Category';
import SublistItem from '../../components/SublistItem';
import './index.css'

function CategoryList({list, sublist}) {
  return ( list
    .filter(category => !category.category)
    .map((item, key) => {
    return <Category item={item} key={key}>
        <div className='category-items'>
        {
          sublist
          .filter(category => item.id === category.category)
          .map((category, i_key) => 
            <Link to="/collaborators" key={i_key}>
              <SublistItem item={category} />
            </Link>
            )
          }
      </div>
    </Category>


  })  );
}

export default CategoryList;