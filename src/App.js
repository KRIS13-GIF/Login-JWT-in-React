// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the addition of `Routes` here
import Login from './Login';
import Technic from './Technician';
import Acceptance from './Acceptance';
import UserPage from './UserPage';
import ProductPage from './pages/ProductPage';


function App() {
  

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/acceptance" element={<Acceptance/>} />
        <Route path="/technician" element={<Technic/>} />
        <Route path="/user/:id"element={<UserPage/>}/>
        <Route path="/user/products/:id" element={<ProductPage/>}/>
      </Routes>
    </Router>
  );
  
}

export default App;
