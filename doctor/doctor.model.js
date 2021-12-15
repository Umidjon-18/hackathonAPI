const mongoose = require('mongoose');

const doctorSxema = new mongoose.Schema({
    fullname: String,
    username:String,
    password: String,
    profession: String,
    about: String,
    rating: Number
})

const doctorModel = mongoose.model('doctor', doctorSxema);
module.exports = doctorModel;