import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbark from './components/Navbark';


function UserPage() {
    const navigate=useNavigate();
  return (
    <div>
      <h1>User Page</h1>
      <Navbark/>
    
    </div>
  );
}

export default UserPage;