const mongoose = require('mongoose');

//Book Schema
const bookSchema = mongoose.schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	bur_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Book = module.exports = mongoose.model('Book', bookSchema);

module.exports.getBooks = function(callback, limit) {
	Book.find(callback).limit(limit);
}