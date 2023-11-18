import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const SendMessage = () => {
    const [chatId, setChatId] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        const token = localStorage.getItem('jwtToken');

        axios.post(
            'http://localhost:8080/admin/send',
            {
                chatId,
                message,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then(response => {
                console.log('Message sent successfully:', response);
            })
            .catch(error => {
                console.error('Error sending message:', error);
            });
    };

    return (
        <div>
            <Typography variant="h4">Send Message</Typography>
            <TextField
                label="Chat ID"
                value={chatId}
                onChange={(e) => setChatId(e.target.value)}
            />
            <TextField
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSendMessage}>
                Send Message
            </Button>
        </div>
    );
};

export default SendMessage;