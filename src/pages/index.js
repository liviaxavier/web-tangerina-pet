import React from 'react';
import {
  BrowserRouter as Router,  
  Routes,
  Route 
} from 'react-router-dom'

import HomePage from "./Home";

function Pages() {
  return <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>;
}

export default Pages;