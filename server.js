// Modules import
const path = require('path')
const http = require('http')
const express = require('express');
const socketio = require('socket.io')

// Initalize socket on server
const app = express();
const server = http.createServer(app)
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000 || process.env.PORT;

server.listen(3000, ()=>{
    console.log(`Server is running on ${PORT}`)
});