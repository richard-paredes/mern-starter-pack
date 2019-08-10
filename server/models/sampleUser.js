const mongoose = require('mongoose');

const SampleUserSchema = mongoose.Schema(
    {
        username: {type: String, unique: true, required: true},
        password: String,
        firstName: String,
        lastName: String,
        email: {type: String, unique: true, required: true}
    }
)

module.exports = mongoose.model('SampleUser', SampleUserSchema);