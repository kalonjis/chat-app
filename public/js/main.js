const chatForm = document.getElementById('chat-form');

const socket = io(); // we can use it as we import socket.io in the script (chat.html-line 60)

socket.on('message',message=>{
    console.log(message)
})

// Message submit
chatForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //Get message text
    const msg = document.getElementById('msg').value;
    
    //Emit message to server
    socket.emit('chatMessage', msg)
})
