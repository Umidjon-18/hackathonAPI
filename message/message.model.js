const mongoose = require('mongoose');

const messageSxema = new mongoose.Schema({
    kimdan_id: String,
    kimga_id: String,
    date: Date,
    message: String
})

const messageModel = mongoose.model('message', messageSxema);
module.exports = messageModel;