// Modules import
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser} = require('./utils/users');

// Initalize socket on server
const app = express();
const server = http.createServer(app)
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'ChatCord Bot'

// Run when client connect
io.on('connection',socket =>{

    //Listen for user joining room
    socket.on('joinRoom', ({username, room})=>{
        const user = userJoin(socket.id, username, room); //socket.id is a property of the socket object automatically generated
        socket.join(user.room); // socket.join() native function in socket module

        // Welcome curent user
        socket.emit('message', formatMessage(botName,'welcome to chatcord')); // 'socket.emit' is adressed to the current client ONLY
    
        // Broadcast when a user connects
        socket.broadcast.to(user.room).emit('message', formatMessage(botName,`${user.username} has joined the chat`)); // 'socket.broadcast.emit' is adressed to all except the current client
    });
    
    //Listen for chatMessage
    socket.on('chatMessage', (msg)=>{
        io.emit('message',formatMessage('USER',msg))
    });

    // Runs when client disconnects
    socket.on('disconnect', ()=>{
        io.emit('message', formatMessage(botName,'A user has left the chat')); // 'io.emit' is adressed to everybody
    });
});


const PORT = 3000 || process.env.PORT;

server.listen(3000, socket=>{
    console.log(`Server is running on ${PORT}`)
});