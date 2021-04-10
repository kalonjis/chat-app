/* Module de connection à la db*/

//On instancie le module 'mongoose' (npm i -s mongoose )
const mongoose = require('mongoose');

mongoose.connect(
    // On récupère le cluster créer dans mongo Atlas depuis mongo Compass 
    'mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.dipxw.mongodb.net/Chat-Cord?retryWrites=true&w=majority', 
    
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
)
.then(()=> console.log('Connected to MongoDB'))
.catch( (err) => console.log('Failed to connect to MongoDB: error ' + err));