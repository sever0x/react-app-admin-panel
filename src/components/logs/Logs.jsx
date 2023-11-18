import React, {useEffect, useState} from 'react';
import {Button, Stack, TextField, Typography} from '@mui/material';
import axios from 'axios';
import LogTable from './LogTable';
import {useNavigate} from "react-router-dom";
import { API_URL } from '../../constants';

const Logs = () => {
    const [chatId, setChatId] = useState('');
    const [username, setUsername] = useState('');
    const [logs, setLogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const handleGetLogs = () => {
        const token = localStorage.getItem('jwtToken');
        const params = {};
        if (chatId) params.chatId = chatId;
        if (username) params.username = username;

        axios
            .get(`${API_URL}/logs`, {
                params,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setLogs(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching logs:', error);
            });
    };

    return (
        <div>
            <Stack spacing={2}>
                <Typography variant="h4">Logs</Typography>
                <Stack direction="row" spacing={1}>
                    <TextField label="Chat ID" value={chatId} onChange={(e) => setChatId(e.target.value)}/>
                    <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <Button variant="contained" color="primary" onClick={handleGetLogs}>
                        Get Logs
                    </Button>
                </Stack>

                <LogTable logs={logs}/>
            </Stack>
        </div>
    );
};

export default Logs;
