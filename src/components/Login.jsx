import React, {useState} from 'react';
import {Button, TextField, Typography} from '@mui/material';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const basicAuthHeader = btoa(`${username}:${password}`);

        axios.post('http://localhost:8080/admin/login', {}, {
            headers: {
                Authorization: `Basic ${basicAuthHeader}`,
            },
        })
            .then(response => {
                const token = response.data.jwtToken;
                const usrname = response.data.username;

                localStorage.setItem('jwtToken', token);
                localStorage.setItem('username', usrname);
                console.log('Received jwt:', token);

                navigate("/logs");
            })
            .catch(error => {
                console.error('Error logging in:', error);
            });
    };

    return (
        <div>
            <Typography variant="h4">Login</Typography>
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
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
        </div>
    );
};

export default Login;
