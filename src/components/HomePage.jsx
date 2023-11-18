import React from 'react';
import { Button, Container, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Ласкаво просимо до Адмін-панелі Раяна Гослінга!
                </Typography>
                <Typography variant="body1" paragraph>
                    Тепер ви контролюєте неймовірного телеграм-бота, створеного Раяном Гослінгом. Відчуйте силу адміністративних можливостей та управляйте своїми розмовами зі смаком.
                </Typography>
                <Typography variant="body1" paragraph>
                    Досліджуйте <Link to="/logs">Logs</Link>, щоб переглядати взаємодії.
                </Typography>
                <Typography variant="body1" paragraph>
                    Ще не зареєстровані? <Link to="/register">Зареєструйтесь</Link> зараз і зануртесь у світ бота від Раяна Гослінга!
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Для реєстрації вам потрібен секретний ключ, який ви можете дізнатися у автора цього бота та адмін панелі. GitHub: <a href="https://github.com/sever0x" target="_blank" rel="noopener noreferrer">github/sever0x</a>.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Також перевірте бота в Телеграмі: <a href="https://t.me/ryan_gosling_drive_gpt_bot" target="_blank" rel="noopener noreferrer">Ryan Gosling's Bot</a>.
                </Typography>
            </Paper>
        </Container>
    );
};

export default HomePage;
