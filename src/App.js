import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {AppBar, Button, Container, Toolbar, Typography} from '@mui/material';
import Register from './components/Register';
import Login from './components/Login';
import Logs from './components/Logs';
import SendMessage from './components/SendMessage';
import AuthenticatedMenu from "./components/AuthenticatedMenu";

const App = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography variant="h6" style={{ marginRight: '20px' }}>
                            Your App Name
                        </Typography>
                    </Link>
                    <Link to="/logs" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit">Logs</Button>
                    </Link>
                    <Link to="/send-message" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit">Send Message</Button>
                    </Link>
                    <AuthenticatedMenu />
                </Toolbar>
            </AppBar>

            <Container style={{ marginTop: '20px' }}>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logs" element={<Logs />} />
                    <Route path="/send-message" element={<SendMessage />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
