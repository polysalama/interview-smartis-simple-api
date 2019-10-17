'use strict'

const mongoose = require('mongoose')

module.exports = function() {
    mongoose.connect('mongodb://mongodb:27017')
    let db = mongoose.connection;
	db.on('error', console.error.bind(console, 'DB connection error...'));
	db.once('open', function callback() {
		console.log('DB connected!');
	});
};
