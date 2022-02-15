import React from 'react';
import Category from '../../components/Category';
import SubList from '../SubcategoryList';
import './index.css'

function CategoryList({list, sublist}) {
  return ( list
    .filter(category => !category.category)
    .map((item, key) => {
    return <Category item={item} key={key}>
      <div className='category-items'>
        <SubList sublist={sublist.filter(category => item.id === category.category)} />
      </div>
    </Category>


  })  );
}

export default CategoryList;