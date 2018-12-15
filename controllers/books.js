const express = require('express');
const books = express();
const models = require('../models');

// INDEX
books.get('/', (req, res) => {
  models.Book.findAll()
    .then(books => {
      res.json(books);
    });
});

// CREATE
books.post('/', (req, res) => {
  models.Book.create({
    author: req.body.author,
    title: req.body.title,
    date: req.body.date,
    publisher: req.body.publisher})
    .then(book => {
      res.json(books);
    });
});

// UPDATE
books.put('/:id', (req, res) => {
  models.Book.update(req.body,
    {where: {id: req.params.id}
    })
    .then(book => {
      res.json(book);
    });
});

// DELETE
books.delete('/:id', (req, res) => {
  models.Book.findById(req.params.id)
    .then(book => {
      if (!book) {
        return res.status(400).send('Nincs ilyen ID!');
      }
      models.Book.destroy({
        where: {
          id: req.params.id}
      })
        .then(books => {
          res.json(books);
        });
    });
});

module.exports = books;
