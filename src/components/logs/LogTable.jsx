import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import SendMessageButton from "./SendMessageButton";

const LogTable = ({ logs }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Chat ID</TableCell>
                        <TableCell>Sender Username</TableCell>
                        <TableCell>Sender Message</TableCell>
                        <TableCell>Response Message</TableCell>
                        <TableCell>Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logs.map((log) => (
                        <TableRow key={log.id}>
                            <TableCell>{log.id}</TableCell>
                            <TableCell>{log.chatId}</TableCell>
                            <TableCell>{log.senderUsername}</TableCell>
                            <TableCell>{log.senderMessage}</TableCell>
                            <TableCell>{log.responseMessage}</TableCell>
                            <TableCell>{log.time}</TableCell>
                            <TableCell>
                                <SendMessageButton chatId={log.chatId} messageId={log.id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LogTable;
