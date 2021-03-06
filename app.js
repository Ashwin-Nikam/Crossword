const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json())

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


app.post('/api/genres', (req, res) => {
	var genre = req.body;
	Genre.addGenre(genre, (err, genre) => {
		if(err) throw err;
		res.json(genre);
	});
});

app.post('/api/books', (req, res) => {
	var book = req.body;
	Book.addBook(book, (err, book) => {
		if(err) throw err;
		res.json(book);
	}) 
});


app.put('/api/genres/:id', (req, res) => {
	var id = req.params.id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, (err, genre) => {
		if(err) throw err;
		res.json(genre);
	});
});

app.put('/api/books/:id', (req, res) => {
	var id = req.params.id;
	var book = req.body;
	Book.updateBook(id, book, {}, (err, book) => {
		if(err) throw err;
		res.json(book);
	});
});

app.delete('/api/genres/:id', (req, res) => {
	var id = req.params.id;
	Genre.deleteGenre(id, (err, genre) => {
		if(err) throw err;
		res.json(genre);
	});
});

app.delete('/api/books/:id', (req, res) => {
	var id = req.params.id;
	Book.deleteBook(id, (err, book) => {
		if(err) throw err;
		res.json(book);
	});
});

app.listen(3000);
console.log('Running on port 3000...');