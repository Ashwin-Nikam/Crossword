const mongoose = require('mongoose');

// Genre schema

const genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

module.exports.Genre = mongoose.model('Genre', genreSchema);