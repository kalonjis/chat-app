const express = require('express');

const app = express();

const PORT = 3000 || process.env.PORT;

app.listen(3000, ()=>{
    console.log(`Server is running on ${PORT}`)
});