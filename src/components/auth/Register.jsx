import React, { useState } from 'react';
import { Button, Container, CssBaseline, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        axios
            .post('http://localhost:8080/admin/register', {
                username,
                password,
                secret: secretKey,
            })
            .then((response) => {
                console.log('Registration successful:', response);
                const token = response.data.jwtToken;
                const usrname = response.data.username;

                localStorage.setItem('jwtToken', token);
                localStorage.setItem('username', usrname);
                console.log('Received jwt:', token);

                navigate('/logs');
            })
            .catch((error) => {
                console.error('Error registering:', error);
                setError(error.response.data.message || 'An error occurred during registration.');
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h4">
                    Register
                </Typography>
                {error && <Typography color="error">{error}</Typography>}
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
                <TextField
                    margin="normal"
                    label="Secret Key"
                    fullWidth
                    value={secretKey}
                    onChange={(e) => setSecretKey(e.target.value)}
                />
                <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
                    Register
                </Button>
            </Paper>
        </Container>
    );
};

export default Register;
