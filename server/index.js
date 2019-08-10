// Server dependencies setup
const express   = require('express'),
    app         = express(),
    mongoose    = require('mongoose');
    require('dotenv').config();

// Database models
const User      = require('./models/sampleUser');

// Route setup
const sampleAPI = require('./routes/sampleUsers');

// Development environment setup
const PORT = process.env.PORT || 5000;
const atlastURI = process.env.DATABASEURL || `mongodb+srv://${process.env.MONGODB_ATLAS_USER}:${process.env.MONGODB_ATLAS_PW}@cluster0-udspt.mongodb.net/test?retryWrites=true&w=majority`;

// MongoDB Atlas configuration
mongoose.connect(atlastURI,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(console.log('Successfully connected to MongoDB'))
    .catch(err => { console.log(`ERROR: ${err.message}`) });

const mongoDB_Connection = mongoose.connection;

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})
// seed quickly, done here to not replicate mongoose
app.get('/api/new', (req, res) => {
    let user = new User({
        username: 'riparedes',
        password: 'password',
        firstName: 'Richard',
        lastName: 'Paredes',
        email: 'rp771120@hotmail.com'
    });

    mongoDB_Connection.collection('sampleusers').insertOne(user);
    res.send('<h2>Creating new user!</h2>')
});

// configuring routes
app.use('/', sampleAPI);

// initializing server
app.listen(PORT, () => {
    console.log(`Server connected on port ${PORT}`);
});