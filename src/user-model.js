const mongoose = require('mongoose');
const e = require("express");

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema);