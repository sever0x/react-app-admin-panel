import React from 'react';
import { Button, Container, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Welcome to Ryan Gosling's Admin Panel!
                </Typography>
                <Typography variant="body1" paragraph>
                    You are now in control of the amazing Telegram bot created by Ryan Gosling. Feel the power of the
                    administrative features and manage your conversations with style.
                </Typography>
                <Typography variant="body1" paragraph>
                    Explore the <Link to="/logs">Logs</Link> to see the interactions
                </Typography>
                <Typography variant="body1">
                    Not registered yet? <Link to="/register">Register</Link> now and dive into the world of Ryan Gosling's bot!
                </Typography>
            </Paper>
        </Container>
    );
};

export default HomePage;
