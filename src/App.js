import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {AppBar, Button, Container, Toolbar, Typography} from '@mui/material';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logs from './components/logs/Logs';
import AuthenticatedMenu from './components/AuthenticatedMenu';
import HomePage from './components/HomePage';

const App = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                        <Typography variant="h6" style={{marginRight: '20px'}}>
                            React Admin Panel
                        </Typography>
                    </Link>
                    <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/logs" style={{textDecoration: 'none', color: 'white'}}>
                        <Button color="inherit">Logs</Button>
                    </Link>
                    <AuthenticatedMenu/>
                </Toolbar>
            </AppBar>

            <Container style={{marginTop: '20px'}}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logs" element={<Logs/>}/>
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
