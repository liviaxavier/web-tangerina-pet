import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components';
// import CategoryList from '../../containers/CategoryList';
import CollaboratorList from '../../containers/CollaboratorList';
// import CategoryServices from '../../services/Category';
import CollaboratorServices from '../../services/Collaborator';
import './index.css'

function CategoryCollaborators() {

  const [collaborators_list, setCollaboratorsList] = useState([])
    const [search_list, setSearchList] = useState()

  const getCollaboratorsList = useCallback( async () => {
    const response = await CollaboratorServices.List()
    setCollaboratorsList(response)
  },[])

  useEffect(() => {
    getCollaboratorsList()
  }, [getCollaboratorsList])

  return ( <div className="container">
    <Header 
    back_to="/" 
    list_to_search={collaborators_list} 
    search_callback={response => setSearchList(response)} 
    
    />
    <main>
    
      <CollaboratorList list={search_list || collaborators_list}/>
    
    </main>
  </div> );
}

export default CategoryCollaborators;