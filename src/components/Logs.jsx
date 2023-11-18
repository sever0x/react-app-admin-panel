import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from "axios";

const Logs = () => {
    const [chatId, setChatId] = useState('');
    const [username, setUsername] = useState('');
    const [logs, setLogs] = useState([]);

    const handleGetLogs = () => {
        const token = localStorage.getItem('jwtToken');

        const params = {};
        if (chatId) params.chatId = chatId;
        if (username) params.username = username;

        axios.get('http://localhost:8080/logs', {
            params,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                setLogs(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching logs:', error);
            });
    };

    return (
        <div>
            <Typography variant="h4">Logs</Typography>
            <TextField
                label="Chat ID"
                value={chatId}
                onChange={(e) => setChatId(e.target.value)}
            />
            <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleGetLogs}>
                Get Logs
            </Button>

            {logs.map(log => (
                <div key={log.id}>
                    {log.message}
                </div>
            ))}
        </div>
    );
};

export default Logs;
