'use strict'

const mongoose = require('mongoose')

module.exports = function(config) {
	mongoose.connect('mongodb://' + config['mongodb_host'] + ':' + config['mongodb_port'])
    let db = mongoose.connection;
	db.on('error', console.error.bind(console, 'DB connection error...'));
	db.once('open', function callback() {
		console.log('DB connected!');
	});
};
