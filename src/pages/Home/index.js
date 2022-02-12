import React from 'react';
import { Header } from '../../components';
import CategoryList from '../../containers/CategoryList';
import CategoryServices from '../../services/Category';
import './index.css'

function HomePage() {
  return ( <div className="container">
    <Header />
    <main>
      <CategoryList list={CategoryServices.List()} />
    </main>
  </div> );
}

export default HomePage;