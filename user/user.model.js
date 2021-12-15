const mongoose = require('mongoose');

const userSxema = new mongoose.Schema({
    username: String,
    password: String
})

const userModel = mongoose.model('user', userSxema);
module.exports = userModel;