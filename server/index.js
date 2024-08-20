const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, { cors: { origin: 'http://localhost:5173' } });

const PORT = 3001;

io.on('connection', (socket) => {
    console.log('Usuário conectado:', socket.id);

    socket.on('disconnect', () => {
        console.log('Usuário desconectado:', socket.id);
    });

    socket.on('set_username', (username) => {
        socket.data.username = username;
    });

    socket.on('message', (text) => {
        io.emit('receive_message', {
            text,
            authorId: socket.id,
            author: socket.data.username || 'Anônimo',
        });
    });
});

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
