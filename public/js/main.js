const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages')

const socket = io(); // we can use it as we import socket.io in the script (chat.html-line 60)

// Message from server
socket.on('message',message=>{
    console.log(message);
    outputMessage(message);

    // Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight // display the last message by default (scroll on bottom)

});

// Message submit
chatForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //Get message text
    const msg = e.target.elements.msg.value; // = document.getElementById('msg').value
    
    //Emit message to server
    socket.emit('chatMessage', msg);

    // Clear input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

// Output message to DOM
const outputMessage = (message)=>{
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">Steph <span>9:15pm</span></p>
                     <p class="text"> ${message} </p>`;
    document.querySelector('.chat-messages').appendChild(div)
}   