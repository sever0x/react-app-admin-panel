import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        axios.post('http://localhost:8080/admin/register', {
            username,
            password,
            secret: secretKey,
        })
            .then(response => {
                console.log('Registration successful:', response);
                const token = response.data.jwtToken;
                const usrname = response.data.username;

                localStorage.setItem('jwtToken', token);
                localStorage.setItem('username', usrname);
                console.log('Received jwt:', token);

                navigate("/logs");
            })
            .catch(error => {
                console.error('Error registering:', error);
                setError(error.response.data.message || 'An error occurred during registration.');
            });
    };

    return (
        <div>
            <Typography variant="h4">Register</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
                label="Secret Key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleRegister}>
                Register
            </Button>
        </div>
    );
};

export default Register;
