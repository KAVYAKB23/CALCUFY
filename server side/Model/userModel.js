const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true  // Ensures email is unique in the database
    },
    password: {
        type: String,
        required: true
    }
});

const Users = mongoose.model("Users", userSchema); // Model name should be singular

module.exports = Users;
