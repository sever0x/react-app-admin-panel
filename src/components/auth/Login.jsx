import React, { useState } from 'react';
import { Button, Container, CssBaseline, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const basicAuthHeader = btoa(`${username}:${password}`);

        axios
            .post(
                `${API_URL}/admin/login`,
                {},
                {
                    headers: {
                        Authorization: `Basic ${basicAuthHeader}`,
                    },
                }
            )
            .then((response) => {
                const token = response.data.jwtToken;
                const usrname = response.data.username;

                localStorage.setItem('jwtToken', token);
                localStorage.setItem('username', usrname);
                console.log('Received jwt:', token);

                navigate('/logs');
            })
            .catch((error) => {
                console.error('Error logging in:', error);
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h4">
                    Login
                </Typography>
                <TextField
                    margin="normal"
                    label="Username"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="normal"
                    type="password"
                    label="Password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                    Login
                </Button>
            </Paper>
        </Container>
    );
};

export default Login;
