import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components';
// import CategoryList from '../../containers/CategoryList';
import CollaboratorList from '../../containers/CollaboratorList';
// import CategoryServices from '../../services/Category';
import CollaboratorServices from '../../services/Collaborator';
import './index.css'

function CategoryCollaborators() {

  const [collaborators_list, setCollaboratorsList] = useState([])

  const getCollaboratorsList = useCallback( async () => {
    const response = await CollaboratorServices.List()
    setCollaboratorsList(response)
  },[])

  useEffect(() => {
    getCollaboratorsList()
  }, [getCollaboratorsList])

  return ( <div className="container">
    <Header back_to="/" />
    <main>
      <CollaboratorList list={collaborators_list}/>
    </main>
  </div> );
}

export default CategoryCollaborators;