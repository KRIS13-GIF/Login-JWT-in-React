// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Outlet, Routes } from 'react-router-dom'; // Note the addition of `Routes` here
import Login from './Login';
import Technic from './Technician';
import Acceptance from './Acceptance';


function App() {
  

  return (

    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/acceptance" element={<Acceptance/>} />
        <Route path="/technician" element={<Technic/>} />
      </Routes>
    </Router>
  );
  
}

export default App;
