// Modules import
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages')
const botName = 'ChatCord Bot'

// Initalize socket on server
const app = express();
const server = http.createServer(app)
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when client connect
io.on('connection',socket =>{
    // Welcome curent user
    socket.emit('message', formatMessage(botName,'welcome to chatcord')); // 'socket.emit' is adressed to the current client ONLY

    // Broadcast when a user connects
    socket.broadcast.emit('message', formatMessage(botName,'A user has joined the chat')); // 'socket.broadcast.emit' is adressed to all except the current client

    // Runs when client disconnects
    socket.on('disconnect', ()=>{
        io.emit('message', formatMessage(botName,'A user has left the chat')); // 'io.emit' is adressed to everybody
    })

    //Listen for chatMessage
    socket.on('chatMessage', (msg)=>{
        io.emit('message',formatMessage('USER',msg))
    })
})


const PORT = 3000 || process.env.PORT;

server.listen(3000, socket=>{
    console.log(`Server is running on ${PORT}`)
});