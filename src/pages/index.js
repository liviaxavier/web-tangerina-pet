import React from 'react';
import {
  BrowserRouter as Router,  
  Routes,
  Route 
} from 'react-router-dom'
import CategoryCollaborators from './CategoryCollaborators';

import HomePage from "./Home";

function Pages() {
  return <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/collaborators" element={<CategoryCollaborators />} />
    </Routes>
  </Router>;
}

export default Pages;