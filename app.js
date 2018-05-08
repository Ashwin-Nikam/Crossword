const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Genre = require('./models/genre.js');
Book = require('./models/book.js');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection;


app.get('/', (req, res) => {
	res.send('Please use /api/books or /api/genres');
});


app.get('/api/genres', (req, res) => {
	Genre.getGenres((err, genres) => {
		if(err) throw err;
		res.json(genres);
	});
});


app.get('/api/books', (req, res) => {
	Book.getBooks((err, books) => {
		if(err) throw err;
		res.json(books);
	});
});


app.get('/api/books/:id', (req, res) => {
	Book.getBookById(req.params.id, (err, books) => {
		if(err) throw err;
		res.json(books);
	});
});

app.listen(3000);
console.log('Running on port 3000...');