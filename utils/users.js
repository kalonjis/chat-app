const users = []; // use to store the state...should be in a database

// Join user to chat
const userJoin = (id, username, room)=>{
    const user = { id, username, room };

    users.push(user);

    return user; // create a user in a specific room
};

// Get current user
const getCurrentUser = (id)=>{
    return users.find(user=> user.id === id)
};

module.exports = {
    userJoin,
    getCurrentUser
}