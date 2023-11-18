import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@mui/material';
import axios from 'axios';
import {API_URL} from "../../constants";

const SendMessageButton = ({chatId, messageId}) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setMessage('');
    };

    const handleSendMessage = () => {
        const token = localStorage.getItem('jwtToken');

        axios
            .post(
                `${API_URL}/admin/send`,
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
            .then((response) => {
                console.log('Message sent successfully:', response);
                handleClose();
            })
            .catch((error) => {
                console.error('Error sending message:', error);
            });
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Send Message
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Send Message</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You are about to send a message to chat ID: {chatId}
                    </DialogContentText>
                    <TextField
                        label="Message"
                        multiline
                        rows={4} // Вы можете установить нужное количество строк
                        fullWidth
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSendMessage} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SendMessageButton;
