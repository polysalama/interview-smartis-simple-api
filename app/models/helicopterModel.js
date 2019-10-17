'use strict'

const mongoose = require('mongoose');

let helicopterSchema = mongoose.Schema({
    name: {type: String, required: true},
    reserved: {type: Boolean, default: false}
});

module.exports = mongoose.model('Helicopter', helicopterSchema)
