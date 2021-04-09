const users = []; // use to store the state...should be in a database

// Join user to chat -// create a user in a specific room
const userJoin = (id, username, room)=>{
    const user = { id, username, room }; // create a user in a specific room

    users.push(user); // Update the users[] with the new user

    return user; // fct return this new user
};

// Get current user
const getCurrentUser = (id)=>{
    return users.find(user=> user.id === id)
};

// User leaves chat
const userLeave = (id)=>{
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0]; // fct return the user
    }

}

const getRoomUsers = (room) =>{
    return users.filter(user => user.room === room)
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
}