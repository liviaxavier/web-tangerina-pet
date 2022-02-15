import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components';
import CategoryList from '../../containers/CategoryList';
import SubList from '../../containers/SubcategoryList';
import CategoryServices from '../../services/Category';
import './index.css'

function HomePage() {

  const [category_list, setCategoryList] = useState([])
  const [subcategory_list, setSubCategoryList] = useState([])
  const [search_list, setSearchList] = useState()

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
    <Header 
      list_to_search={[...category_list, ...subcategory_list]} 
      search_callback={response => setSearchList(response)} 
    />
    <main className={search_list ? 'search-list' : ''}> 
      {
        search_list ? 
        <SubList sublist={search_list} /> :  
        <CategoryList list={category_list} sublist={subcategory_list} />
    }
    </main>
  </div> );
}

export default HomePage;