import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components';
import CategoryList from '../../containers/CategoryList';
import CategoryServices from '../../services/Category';
import './index.css'

function HomePage() {

  const [category_list, setCategoryList] = useState([])
  const [subcategory_list, setSubCategoryList] = useState([])

  const getCategoryList = useCallback( async () => {
    const response = await CategoryServices.List()
    const subcategory = await CategoryServices.SubcategoryList()
    setCategoryList(response)
    setSubCategoryList(subcategory)
  },[])

  useEffect(() => {
    getCategoryList()
  }, [getCategoryList])

  return ( <div className="container">
    <Header />
    <main>
      <CategoryList list={category_list} sublist={subcategory_list} />
    </main>
  </div> );
}

export default HomePage;