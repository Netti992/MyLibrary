const express = require('express');
const app = express();
const books = require('./controllers/books');

app.use('/books', books);

app.listen(5000);
