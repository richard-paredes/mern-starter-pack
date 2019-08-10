const express   = require ('express'),
    router      = express.Router({mergeParams: true}),
    User        = require('../models/sampleUser');

router.get('/api/sampleUsers', (req, res) => {
    // search for document in database
    User.find( { }, (err, users) => {
        
        // convert document to objects (to become JSONs)
        users = users.map( (user) => {
            return user.toObject();
        });

        // send json to route GET request
        res.json(users);
    })
});

module.exports = router;

