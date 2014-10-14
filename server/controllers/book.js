var bookModel = require('../models/book');

exports.create = function(req, res) {
    var book = new bookModel(req.body);
    book.save(function(err, book) {
      if (err) {
        console.error(err);
        res.status(409).end();
      }

      res.status(200).end();
    });
};

exports.list = function(req, res) {
    bookModel.find({}, function(err, books) {
      if (err) {
        console.error(err);
        res.status(409).end();
      }

      res.send(books);
    });
};