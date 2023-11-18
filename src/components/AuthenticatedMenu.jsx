import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const AuthenticatedMenu = () => {
    const [token, setToken] = useState(localStorage.getItem('jwtToken'));

    useEffect(() => {
        setToken(localStorage.getItem('jwtToken'));
    }, []);

    return (
        <div style={{ marginLeft: 'auto' }}>
            {token ? (
                <Typography variant="h6" style={{ marginRight: '20px' }}>
                    Welcome, {localStorage.getItem('username')}
                </Typography>
            ) : (
                <>
                    <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit">Register</Button>
                    </Link>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit">Login</Button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default AuthenticatedMenu;
