import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login() {



    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        // Clear token and role values when the login page is loaded
        localStorage.removeItem('token');
        localStorage.removeItem('role');
      }, []);


    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5004/api/v1/auth/authenticate', {
                email,
                password,
            });

    
            const userRole = response.data.role;
            const token=response.data.access_token
         
            localStorage.setItem('role', userRole);
            localStorage.setItem('token', token)

            // Redirect to different pages or show different components based on the user's role
            if (userRole === 'USER') {
                console.log("user")
            } else if (userRole === 'ACCEPTANCE') {
                console.log("Acceptance")
                console.log(response.data.access_token)
                navigate("/acceptance");

            } else if (userRole === 'TECHNICIAN') {
                console.log("technic")
                navigate("/technician");
            }
        } catch (error) {
            console.error('Login failed:', error);
            navigate("/");

        }
    };



    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
