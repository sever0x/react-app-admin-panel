import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';

const AuthenticatedMenu = () => {
    const [token, setToken] = useState(localStorage.getItem('jwtToken'));
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setToken(localStorage.getItem('jwtToken'));
    }, [location]);

    const handleSignOut = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('username');
        navigate("/login");
    };

    return (
        <div style={{marginLeft: 'auto'}}>
            {token ? (
                <>
                    <Stack direction="row" spacing={1}>
                        <Typography variant="h6" style={{marginRight: '20px'}}>
                            Welcome, {localStorage.getItem('username')}
                        </Typography>
                        <Button color="inherit" onClick={handleSignOut}>
                            Log Out
                        </Button>
                    </Stack>
                </>
            ) : (
                <>
                    <Stack direction="row" spacing={1}>
                        <Link to="/register" style={{textDecoration: 'none', color: 'white'}}>
                            <Button color="inherit">Register</Button>
                        </Link>
                        <Link to="/login" style={{textDecoration: 'none', color: 'white'}}>
                            <Button color="inherit">Login</Button>
                        </Link>
                    </Stack>
                </>
            )}
        </div>
    );
};

export default AuthenticatedMenu;
