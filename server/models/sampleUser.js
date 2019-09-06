const mongoose = require('mongoose');

const SampleUserSchema = mongoose.Schema(
    {
        username: {type: String, unique: true, required: true},
        password: String,
        firstName: String,
        lastName: String
    }
)

module.exports = mongoose.model('SampleUser', SampleUserSchema);