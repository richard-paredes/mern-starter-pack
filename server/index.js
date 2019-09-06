// Server dependencies setup
const express   = require('express'),
    cors        = require('cors'),
    mongoose    = require('mongoose'),
    app         = express();
    require('dotenv').config();

// Database models
const User      = require('./models/sampleUser');

// Route setup
const sampleAPI = require('./routes/sampleUsers');

// Development environment setup
const PORT = process.env.PORT || 5000;
const atlastURI = process.env.DATABASEURL || 
    `mongodb+srv://${process.env.MONGODB_ATLAS_USER}:${process.env.MONGODB_ATLAS_PW}@cluster0-udspt.mongodb.net/${process.env.MONGODB_ATLAS_DATABASE}?retryWrites=true&w=majority`;

// MongoDB Atlas configuration
mongoose.connect(atlastURI,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(console.log('Successfully connected to MongoDB'))
    .catch(err => { console.log(`ERROR: ${err.message}`) });

// root route
app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

// configuring routes
app.use('/', sampleAPI);

// initializing server
app.listen(PORT, () => {
    console.log(`Server connected on port ${PORT}`);
});