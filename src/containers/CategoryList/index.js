import React from 'react';
import Category from '../../components/Category';
import SublistItem from '../../components/SublistItem';
import CategoryServices from '../../services/Category';
import './index.css'

function CategoryList({list}) {
  return ( list
    .filter(category => !category.category)
    .map((item, key) => {
    return <Category item={item} key={key}>
        <div className='category-items'>
        {
          CategoryServices.List()
          .filter(category => item.identifier === category.category)
          .map(category => 
            <SublistItem item={category} key={key} />
            )
          }
      </div>
    </Category>


  })  );
}

export default CategoryList;