const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection;

console.log('Hello world');